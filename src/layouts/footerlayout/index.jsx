import React from "react";
import logo from '../../assets/images/logo-print.png';
export default function footerlayout() {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <img
                src={logo}
                alt="logo"
                className="w-[150px] h-auto mb-4"
              />
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Компания</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="hover:underline">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                  Наши Перемущество
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                  Наши Услуги
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <ul  className="flex flex-col gap-2">
              
                <li className="text-sm">
                <a className="hover:underline" href="mailto:tafakkurxizmatsamarasimchj@gmail.com">
                tafakkurxizmatsamarasimchj@gmail.com
                </a>
                </li>
            
               
                <li>
                  <a href="tel:+998940511494" className="hover:underline">
                  +998940511494
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/place/11+uy/@41.2810676,69.202739,21172m/data=!3m1!1e3!4m10!1m2!2m1!1sSirg'ali+tumani,+Nomdanak+maxallasi,+Fayzli+3+to'r+ko'cha+11-uy!3m6!1s0x38ae8d0050816a0f:0xade9d9bf3920e2ad!8m2!3d41.3329977!4d69.2055478!15sCj9TaXJnJ2FsaSB0dW1hbmksIE5vbWRhbmFrIG1heGFsbGFzaSwgRmF5emxpIDMgdG8nciBrbydjaGEgMTEtdXmSARJhcGFydG1lbnRfYnVpbGRpbmfgAQA!16s%2Fg%2F11y55_l231?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D" className="hover:underline flex flex-col">
                    Адрес
                    <span className="mt-2">
                    Сиргалийский район, махалля Номданак, улица Файзли, дом 11.
                    </span>
                  </a>
    
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Вызов мастера</h4>
              <p className="mb-4">
              Сломался ли ваш принтер или другая техника? Если у вас нет возможности привезти оборудование в мастерскую, наши специалисты готовы помочь! Все, что вам нужно сделать — это позвонить, и мы приедем к вам для диагностики и ремонта.
              </p>
              <a href="/mastercall" className="bg-indigo-500 text-[12px] p480:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105">
                На Выезд
              </a>
            </div>
          </div>
          <div className="footer-bottom-container">
            <div className="w-full h-[1px] bg-slate-400 mt-6 opacity-35"></div>

            <div className="flex  w-full justify-between mt-6">
            <h3>© 2022 "TAFAKKUR XIZMAT SAMARASI" MChJ</h3>
            <p className="text-[14px] font-extralight">Creat By <span className="text-[#a357ff] font-semibold">LIMSA</span></p>
            </div>
           
          </div>
        </div>
      </footer>
    </>
  );
}