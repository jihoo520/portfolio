import React, { useRef, useState, useEffect } from "react";
import "./Card.css";

function Card({ card }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cardRect, setCardRect] = useState(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef(null);

    console.log(card.img)

    const handleMouseMove = (e) => {
        if (isFlipped) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 마우스 위치 저장 (글래어 효과용)
        setMousePos({ x, y });

        // 3D 회전 계산
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX; // -1 ~ 1
        const percentY = (y - centerY) / centerY; // -1 ~ 1

        const maxRotate = 15;
        const rY = percentX * maxRotate; // 좌우 기울임
        const rX = -percentY * maxRotate; // 상하 기울임 (반대로)

        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
        // 회전 리셋
        setRotateX(0);
        setRotateY(0);
    };

    const handleCardClick = () => {
        if (!isFlipped && cardRef.current) {
            // 카드의 현재 위치 정보 저장
            const rect = cardRef.current.getBoundingClientRect();
            setCardRect({
                left: rect.left,
                top: rect.top,
                width: rect.width,
                height: rect.height,
                centerX: rect.left + rect.width / 2,  // 카드 중심점 X
                centerY: rect.top + rect.height / 2   // 카드 중심점 Y
            });
        }
        setIsFlipped(!isFlipped);
    };

    // 뷰포트 중앙 계산
    const getViewportCenter = () => {
        return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
    };

    const styles = {
        intro: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff"
        },
        frontend: {
            background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            color: "#fff"
        },
        backend: {
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            color: "#2c3e50"
        },
        DB: {
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            color: "#2c3e50"
        },
        projects: {
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            color: "#2c3e50"
        },
    };

    const style = styles[card.type] || {};

    // 애니메이션 스타일 계산 - 카드 중심점을 뷰포트 중심점에 맞춤
    const getAnimationStyle = () => {
        if (!isFlipped || !cardRect) return {};
        const viewportCenter = getViewportCenter();
        const deltaX = viewportCenter.x - cardRect.centerX;
        const deltaY = viewportCenter.y - cardRect.centerY;
        return {
            position: "fixed",
            width: `${cardRect.width}px`,
            height: `${cardRect.height}px`,
            zIndex: 1000,
            animation: "moveToViewportCenter 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
            "--start-x": "0px",
            "--start-y": "0px",
        };
    };

    // 3D 회전 스타일 (플립되지 않은 상태에서만)
    const get3DStyle = () => {
        if (isFlipped) return {};

        return {
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
            transition: isHovered ? 'none' : 'transform 0.3s ease-out'
        };
    };

    return (
        <>
            {/* Backdrop */}
            {isFlipped && (
                <div
                    className="modal-backdrop"
                    onClick={() => setIsFlipped(false)}
                />
            )}

            <div
                className={`card-container ${isFlipped ? 'flipped-modal' : ''}`}
                style={getAnimationStyle()}
                onClick={handleCardClick}
            >
                <div className="card-flip-wrapper">
                    <div
                        className={`card-flip ${isFlipped ? 'is-flipped' : ''}`}
                        style={get3DStyle()}
                    >
                        {/* Front */}
                        <div
                            className="card-face card-front"
                            ref={cardRef}
                            style={style}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Glare effect */}
                            {isHovered && !isFlipped && (
                                <div
                                    className="card-glare"
                                    style={{
                                        left: `${(mousePos.x / 240) * 100}%`,
                                        top: `${(mousePos.y / 320) * 100}%`
                                    }}
                                />
                            )}

                            <div className="card-content">
                                <h2 className="card-title">{card.name}</h2>

                                <div className="card-image-container">
                                    <img
                                        className="card-image"
                                        src={card.img}
                                        alt={card.name}
                                    />
                                </div>

                                <div className="card-description">
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Back */}
                        <div className="card-face card-back">
                            <div className="card-back-content">
                                <h3 className="card-back-title">{card.name}</h3>
                                <div className="card-back-description">
                                    {typeof card.modalDescription === "string" ? (
                                        <p style={{ whiteSpace: 'pre-line' }}>{card.modalDescription}</p>
                                    ) : (
                                        card.modalDescription
                                    )}
                                </div>
                                <button
                                    className="close-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsFlipped(false);
                                    }}
                                >
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;