import { faMailBulk, faContactBook } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHub, Linkedin } from "react-feather";
export default function Footer() {
  const style = "flex items-center gap-2 mt-2 hover:text-yellow-100";
  const styleText = "hidden xl:block";
  return (
    <>
      <div className="bg-gray-800 text-white p-10">
        <div>
          <ul className="flex justify-evenly">
            <li>
              <a href="mailto:muhainun059@gmail.com" className={style}>
                <FontAwesomeIcon icon={faMailBulk} />
                <p className={styleText}> : muhainun059@gmail.com </p>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+6285731013100?text=Assalamualaikum"
                className={style}>
                <FontAwesomeIcon icon={faContactBook} />
                <p className={styleText}>: 085731013100</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/razorzero0" className={style}>
                <GitHub size={15} />
                <p className={styleText}>: razorZero0</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-ainun-yanuar-951534264/"
                className={style}>
                <Linkedin size={15} />
                <p className={styleText}>: Muhammad Ainun Yanuar Syam</p>
              </a>
            </li>
          </ul>
          <p className="mt-10 text-gray-400 text-center">
            Copyright© by Ainun 2023
          </p>
        </div>
      </div>
    </>
  );
}
