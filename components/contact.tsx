'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 추가할 수 있습니다
    console.log(formData);
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'example@email.com',
      link: 'mailto:example@email.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '010-0000-0000',
      link: 'tel:01000000000',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      details: '서울특별시',
      link: 'https://maps.google.com/?q=Seoul',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-4xl font-bold">CONTACT</h2>
          <div className="w-16 h-1 bg-[#ff6b45] ml-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-[#ff6b45]/10 text-[#ff6b45] rounded-full mr-4">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">메시지 보내기</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="이름"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="이메일"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="제목"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="메시지"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-[#ff6b45] hover:bg-[#ff6b45]/90"
              >
                보내기 <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
