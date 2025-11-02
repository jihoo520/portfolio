import React from "react";

function App() {
  const resumeUrl = "/resume.pdf";
  const copyPortfolioUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("포트폴리오 URL이 클립보드에 복사되었습니다: " + url);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col items-center p-6">
      {/* 프로필 섹션 */}
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-3xl text-center mt-8">
        {/* ✅ 프로필 이미지 */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src="/profile.jpg"
              alt="전지후 프로필"
              className="object-cover w-28 h-28 -translate-y-1"
            />
          </div>
        </div>

        {/* 이름 / 직무 */}
        <h1 className="text-3xl font-bold mb-2">전지후</h1>
        <h2 className="text-lg text-gray-500 mb-4">풀스택 개발자</h2>

        {/* 기술 스택 */}
        <p className="text-gray-700 mb-6">
          💻 <strong>Frontend:</strong> HTML, CSS, JavaScript, React, React Native <br />
          ⚙️ <strong>Backend:</strong> C, Python, Java, Spring Boot <br />
          🗄️ <strong>DBMS:</strong> MySQL, Oracle
        </p>

        {/* GitHub 링크들 */}
        <div className="space-y-2 mb-6">
          <a
            href="https://github.com/cheonTH/refrigeratorAI_TeamProject-React_native-"
            className="text-blue-600 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 React Native GitHub
          </a>
          <a
            href="https://github.com/cheonTH/refrigeratorAI_TeamProject-Python-"
            className="text-blue-600 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            🧠 Python GitHub
          </a>
          <a
            href="https://github.com/cheonTH/refrigeratorAI_TeamProject-Springboot-"
            className="text-blue-600 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 Spring Boot GitHub
          </a>
          <a
            href="https://github.com/cheonTH/refrigeratorAI_TeamProject-React-"
            className="text-blue-600 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎨 React GitHub
          </a>
        </div>

        {/* 버튼 섹션 */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={resumeUrl}
            download
            className="bg-blue-500 text-white px-5 py-2 rounded-full shadow hover:bg-blue-600 transition"
          >
            📄 이력서 다운로드
          </a>
          <button
            onClick={copyPortfolioUrl}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-full shadow hover:bg-gray-300 transition"
          >
            🔗 포트폴리오 링크 복사
          </button>
        </div>

        {/* 이메일 */}
        <p className="mt-6 text-gray-600 text-sm">
          📧 이메일:{" "}
          <a
            href="mailto:king107031@naver.com"
            className="text-blue-500 hover:underline"
          >
            king107031@naver.com
          </a>
        </p>
      </div>

      {/* 푸터 */}
      <footer className="mt-10 text-gray-400 text-sm">
        © 2025 Jeon Jihoo | Modern Developer Portfolio
      </footer>
    </div>
  );
}

export default App;

