import Image from 'next/image';

import githubIcon from '@/assets/icons/common/ic-github.svg';
import notionIcon from '@/assets/icons/common/ic-notion.svg';
import youtubeIcon from '@/assets/icons/common/ic-youtube.svg';

export default function Footer() {
  return (
    <footer className="px-6 py-7.5 md:px-10 md:py-15 lg:px-0">
      <div className="flex max-w-380 items-center justify-between">
        <div className="text-sm text-gray-500">© 2025 Global Nomad</div>

        <nav>
          <ul className="flex gap-4">
            <li className="relative h-6 w-6">
              <a
                href="https://github.com/Codeit-FE19-Part4-Team4/global-nomad.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block h-full w-full"
                aria-label="GitHub">
                <Image fill src={githubIcon} alt="" />
              </a>
            </li>

            <li className="relative h-6 w-6">
              <a
                href="https://www.notion.so/2c5df82f6bdf80b58068d6613a2f06d2?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block h-full w-full"
                aria-label="Notion">
                <Image fill src={notionIcon} alt="" />
              </a>
            </li>

            <li className="relative h-6 w-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block h-full w-full"
                aria-label="YouTube">
                <Image fill src={youtubeIcon} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
