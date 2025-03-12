import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">박수관</h3>
            <p className="text-gray-400 mt-2">프론트엔드 개발자</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#ff6b45] transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
            <Link
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#ff6b45] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#ff6b45] transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 박수관. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
