function CVOne({ firstName, lastName, company, phone, email, imagePreviewUrl }) {
  return (

    
    
    <div className="text-gray-900 flex p-10 overflow-y-auto min-h-[100%]">
        
      {/* left side */}
      <div className="w-1/3 bg-slate-800 text-gray-100 p-5 text-start text-gray-200 py-12">
        <div className="flex justify-center ">
          <img
            className="rounded-full w-32 h-32 text-center"
            src={
                imagePreviewUrl
                  ? imagePreviewUrl
                  : "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
              }
          />
        </div>
        <div className="my-10">
            
          <h3 className="text-xl uppercase text-white">Contact</h3>
          <hr />
          <ul className="p-4 text-xs">
            <li><i className="fa fa-phone"></i> {phone ? phone : "+855-121-231-23"}</li>
            <li><i className="fa fa-phone"></i> {email ? email : "soksereyvisal@gmail.com"}</li>
            <li><i className="fa fa-phone"></i> 123 Anywhere St., Any City</li>
            <li><i className="fa fa-phone"></i> {company ? company : "Beltei International"}</li>
          </ul>

          <h3 className="text-xl uppercase text-white mt-5">Education</h3>
          <hr />
          <ul className="p-4 text-xs">
            <li>
                <div>
                    <small>2022 - 2024</small>
                    <p>Beltei International University</p>
                    <small>Bechelor of Software Engineering</small>
                </div>
            </li>
            <li>
                <div>
                    <small>2020 - 2022</small>
                    <p>Beltei International School</p>
                    <small>Diploma</small>
                    <small>GPA: 3.8 / 4.0</small>
                    
                </div>
            </li>
          </ul>

          <h3 className="text-xl uppercase text-white mt-5">Skills</h3>
          <hr />
          <ul className="p-4 text-xs">
            <li>
                <p>Project Managment</p>
            </li>
            <li>
                <p>Public Relations</p>
            </li>
            <li>
                <p>Teamwork</p>
            </li>
            <li>
                <p>Time Management</p>
            </li>
            <li>
                <p>Leadership</p>
            </li>

          </ul>

          
          <h3 className="text-xl uppercase text-white mt-5">LANGUAGES</h3>
          <hr />
          <ul className="p-4 text-xs">
            <li>
                <p>English (Fluent)</p>
            </li>
            <li>
                <p>French (Fluent)</p>
            </li>
            <li>
                <p>German (Basics)</p>
            </li>
            <li>
                <p>Spanish (Intermediate)</p>
            </li>
          </ul>
          
        </div>
      </div>

      {/* right side  */}
      <div className="w-2/3 bg-gray-100 p-5 text-start  py-12">
        <div className="m-10 mt-0 h-32 flex items-center">
            <div>                
                <h1 className="text-3xl font-bold">{firstName || lastName
                        ? `${firstName} ${lastName}`
                        : "SOK SEREYVISAL"}</h1>
                <h3 className="text-gray-600 mt-2">Fullstack Developer</h3>
                <div className="w-14 bg-slate-900 pb-1"></div>
            </div>
        </div>

        <div>
                      
          <h3 className="text-xl uppercase mt-5 font-bold">LANGUAGES</h3>
          <hr className="mt-1 mb-2"/>
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.</p>
          
        </div>
        
        <div>
                      
          <h3 className="text-xl uppercase mt-5 font-bold">Work Experience</h3>
          <hr className="mt-1 mb-2"/>
          <ul>
            <li>
                <div>
                    <div className="flex justify-between">
                        <h4 className="font-bold">Borcelle Studio</h4>
                        <small>2030 - Present</small>
                    </div>
                    <div className="w-14 bg-slate-900 h-[2px] float-end"></div>

                    <small>Marketing Manager & Specialist </small>
                </div>
                <ul className="text-xs list-disc ms-6 mt-1">
                    <li>Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.</li>
                    <li>Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.                    </li>
                    <li>Monitor brand consistency across marketing channels and materials.                    </li>
                </ul>
            </li>
            <li className="pt-3">
                <div>
                    <div className="flex justify-between">
                        <h4 className="font-bold">Fauget Studio</h4>
                        <small>2025 -  2029 </small>
                    </div>
                    <div className="w-14 bg-slate-900 h-[2px] float-end"></div>
                    <small>Marketing Manager & Specialist  </small>
                </div>
                <ul className="text-xs list-disc ms-6 mt-1">
                    <li>Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.</li>
                    <li>Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.                    </li>
                    <li>Monitor brand consistency across marketing channels and materials.                    </li>
                </ul>
            </li>
                <li className="pt-3">
                    <div>
                        <div className="flex justify-between">
                            <h4 className="font-bold">Fauget Studio</h4>
                            <small>2025 -  2029 </small>
                        </div>
                        <div className="w-14 bg-slate-900 h-[2px] float-end"></div>
                        <small>Marketing Manager & Specialist  </small>
                    </div>
                    <ul className="text-xs list-disc ms-6 mt-1">
                        <li>Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.</li>
                        <li>Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.                    </li>
                        <li>Monitor brand consistency across marketing channels and materials.                    </li>
                    </ul>
                </li>
          </ul>
          
        </div>

        <div>
            <h3 className="text-xl uppercase mt-5 font-bold">Reference</h3>
            <hr className="mt-1 mb-2"/>

            <div className="grid grid-cols-2 gap-5 text-xs">
                <div>
                    <h4 className="font-bold">Estelle Darcy</h4>
                    <p>Wardiere Inc. / CTO</p>
                    <small>123-456-7890</small>
                    <small>hello@reallygreatsite.com</small>
                </div>
                <div>
                    <h4 className="font-bold">Estelle Darcy</h4>
                    <p>Wardiere Inc. / CTO</p>
                    <small>123-456-7890</small>
                    <small>hello@reallygreatsite.com</small>
                </div>
            </div>
            
        </div>
        

      </div>
    </div>
  );
}

export default CVOne;
