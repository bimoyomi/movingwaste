"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 애니메이션 시작
    setIsAnimationStarted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">신</span>
                  </div>
                  <h1 className="text-xl font-bold text-gray-900">
                    신독환경
                  </h1>
                </div>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#home" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                  홈
                </a>
                <a href="#service" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                  정리 서비스
                </a>
                <a href="#reviews" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                  후기
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                  문의
                </a>
              </div>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/background.png"
            alt="배경 이미지"
            fill
            className="object-cover"
            priority
          />
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                혼자서는 힘든 <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">유품정리,</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">걱정만 쌓여가고 계신가요?</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed text-left">
                남겨진 물건 하나하나 정성껏,<br />
                전문가가 책임지고 정리해드립니다.
              </p>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg cursor-pointer w-full sm:w-auto"
              >
                정리 서비스 시작하기
              </button>
              

            </div>

          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="service" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
              정리 서비스를 3단계로 완료합니다
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              간단한 상담만으로 시작할 수 있습니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 1단계 */}
            <div className="text-center">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">상담 및 견적</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  전화나 카카오톡으로 간단한 상담 후<br />
                  정확한 견적을 받아보세요.
                </p>
              </div>
            </div>

            {/* 2단계 */}
            <div className="text-center">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">전문팀 방문</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  약속된 시간에 전문 정리팀이 방문하여<br />
                  체계적으로 정리를 시작합니다.
                </p>
              </div>
            </div>

            {/* 3단계 */}
            <div className="text-center">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">완료 및 확인</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  하루 만에 모든 정리가 완료되고,<br />
                  깔끔한 공간을 확인하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After 섹션 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
              Before / After
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              전문팀이 방문해 빈 공간으로 바꿔드립니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Before */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Before</h3>
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-gray-200 h-48 sm:h-56 lg:h-64 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/image/before.jpg" 
                      alt="Before - 짐이 가득한 방" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">방을 꽉 채운 대형 침대와 장롱</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">방치된 갖가지 생활용품들</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">정리하기 어려운 상태</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">After</h3>
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-gray-100 h-48 sm:h-56 lg:h-64 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/image/after.jpg" 
                      alt="After - 완전히 비워진 방" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">깔끔하게 정리된 공간</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">입주 준비 완료</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">스트레스 해소</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
              실제 사례 / 후기
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              고객님들의 생생한 후기를 확인해보세요
            </p>
          </div>
          
          {/* 후기 슬라이드 애니메이션 */}
          <div className="overflow-hidden relative">
            <div 
              className={`flex ${isAnimationStarted ? 'animate-scroll' : ''}`} 
              style={{ 
                width: 'max-content',
                transform: isAnimationStarted ? 'none' : 'translateX(0)'
              }}
            >
              {/* 첫 번째 세트 */}
              {Array.from({ length: 15 }, (_, i) => (
                <div key={`first-${i}`} className="flex-shrink-0 w-[20rem] sm:w-[28rem] lg:w-[36rem] mx-2 sm:mx-4">
                  <div className="bg-white p-0 rounded-2xl shadow-sm border border-gray-100 h-full flex items-center justify-center">
                    <img
                      src={`/image/${i + 1}.PNG`}
                      alt={`실제 후기 ${i + 1}`}
                      className="rounded-xl object-contain max-h-full w-full"
                    />
                  </div>
                </div>
              ))}
              {/* 두 번째 세트 */}
              {Array.from({ length: 15 }, (_, i) => (
                <div key={`second-${i}`} className="flex-shrink-0 w-[20rem] sm:w-[28rem] lg:w-[36rem] mx-2 sm:mx-4">
                  <div className="bg-white p-0 rounded-2xl shadow-sm border border-gray-100 h-full flex items-center justify-center">
                    <img
                      src={`/image/${i + 1}.PNG`}
                      alt={`실제 후기 ${i + 1}`}
                      className="rounded-xl object-contain max-h-full w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 px-4">
            전화나 문자로 무료 견적받고<br className="block sm:hidden" />
            시작하세요
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 px-4">
            전문 상담사가 빠르고 정확한 견적을<br className="block sm:hidden" />
            제공해드립니다
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button 
              onClick={() => window.open('tel:010-8967-3800')}
              className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              전화 상담하기
            </button>
            <button 
              onClick={() => window.open('sms:010-8967-3800')}
              className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              문자 상담하기
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">신독환경</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                보이지 않는 곳에서 성실하게,
                <br />
                유품정리 전문 업체입니다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">지역</h4>
              <ul className="flex gap-4 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">서울</a></li>
                <li><a href="#" className="hover:text-white transition-colors">경기</a></li>
                <li><a href="#" className="hover:text-white transition-colors">인천</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="tel:010-8967-3800" className="hover:text-white transition-colors">010-8967-3800</a></li>
                <li><a href="mailto:jks7094@gmail.com" className="hover:text-white transition-colors">jks7094@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-gray-400 text-center text-sm sm:text-base">
              <p className="mb-2">주소: 경기도 고양시 일산동구 일산로 380번길 25-6, 102호</p>
              <p>대표: 전경섭 | 사업자등록번호: 685-67-00309</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
