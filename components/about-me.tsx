import {
  User,
  Calendar,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
} from 'lucide-react';

export default function AboutMe() {
  const personalInfo = [
    {
      icon: <User className="h-6 w-6" />,
      label: '이름',
      value: '박수관',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      label: '생년월일',
      value: '00.07.28',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: '위치',
      value: '경기도 광주시',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: '연락처',
      value: '010-9039-0238',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: '이메일',
      value: 'qkrsuzxc123@gmail.com',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      label: '학력',
      value: '안산대학교 (건축디자인과)',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-4xl font-bold">ABOUT ME</h2>
          <div className="w-16 h-1 bg-[#ff6b45] ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="mr-4 text-gray-600">{info.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{info.label}</p>
                <p className="font-medium">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">자기소개</h3>
          <p className="text-lg leading-relaxed">
            안녕하세요, 프론트엔드 개발자 박수관입니다. 사용자 경험을 중요시하며
            깔끔하고 효율적인 코드 작성을 지향합니다. React, Next.js, TypeScript
            등의 최신 기술 스택을 활용하여 웹 애플리케이션을 개발하고 있습니다.
            지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고
            있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
