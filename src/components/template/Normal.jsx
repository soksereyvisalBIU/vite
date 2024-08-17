
function Normal() {
  return (
    <div className="container mx-auto p-8 text-start overflow-y-scroll">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3 bg-gray-200 p-6 rounded-lg">
        <div className="flex justify-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile Picture"
            className="rounded-full w-32 h-32"
          />
        </div>

        <h4 className="text-xl mb-2 text-gray-800">Contact</h4>
        <ul className="list-none ps-5 text-sm description-font  text-gray-600">
          <li>
            <a href="tel:+123-456-7890">+123-456-7890</a>
          </li>
          <li>
            <a href="mailto:hello@reallygreatsite.com">
              hello@reallygreatsite.com
            </a>
          </li>
          <li>
            <a href="https://www.reallygreatsite.com">
              www.reallygreatsite.com
            </a>
          </li>
          <li>123 Anywhere St., Any City</li>
        </ul>
        <h4 className="text-xl mb-2 text-gray-800">Language</h4>
        <ul className="list-none ps-5  text-gray-600 text-sm description-font">
          <li className="flex items-center">
            <span>French</span>
            <div className="ml-4 bg-gray-800 h-2 rounded-full w-40"></div>
          </li>
          <li className="flex items-center">
            <span>English</span>
            <div className="ml-4 bg-gray-800 h-2 rounded-full w-60"></div>
          </li>
          <li className="flex items-center">
            <span>Spanish</span>
            <div className="ml-4 bg-gray-800 h-2 rounded-full w-40"></div>
          </li>
        </ul>
        <h4 className="text-xl mb-2 text-gray-800">Skills</h4>
        <ul className="list-none ps-5 text-sm description-font  text-gray-600">
          <li className="flex items-center">
            <span>Organized</span>
            <div className="ml-4 flex gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
            </div>
          </li>
          <li className="flex items-center">
            <span>Communication</span>
            <div className="ml-4 flex gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </li>
          <li className="flex items-center">
            <span>Teamwork</span>
            <div className="ml-4 flex gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </li>
          <li className="flex items-center">
            <span>Meeting deadlines</span>
            <div className="ml-4 flex gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </li>
          <li className="flex items-center">
            <span>Critical thinking</span>
            <div className="ml-4 flex gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl mb-4 text-gray-800">
          KORINA VILLANUEVA
        </h1>
        <h3 className="text-xl mb-2 text-gray-800">
          Graphic Designer
        </h3>

        <p className="ps-5 text-sm description-font mb-2 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc sit amet sem nec risus egestas accumsan. In enim nunc,
          tincidunt ut quam eget, luctus sollicitudin neque. Sed leo
          nisl, semper ac hendrerit a, sollicitudin in arcu.
        </p>

        <h4 className="text-xl mb-2 text-gray-800">Experience</h4>

        <ul className="list-none ps-5  text-gray-600 text-sm description-font">
          <li>
            <strong className="font-medium">Graphic Designer</strong>
            Aldenaire & Partners Jan 2021 - Jan 2022
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc sit amet sem nec risus egestas accumsan. In enim
              nunc, tincidunt ut quam eget, luctus sollicitudin neque.
            </p>
          </li>
          <li>
            <strong className="font-medium">Graphic Designer</strong>
            <br />
            Warner & Spencer
            <br />
            Jan 2020 - Dec 2020
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sit amet sem nec risus egestas accumsan. In enim
            nunc, tincidunt ut quam eget, luctus sollicitudin neque.
          </li>
          <li>
            <strong className="font-medium">Graphic Designer</strong>
            <br />
            Ingoude Company
            <br />
            Jan 2017 - Dec 2029
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sit amet sem nec risus egestas accumsan. In enim
            nunc, tincidunt ut quam eget, luctus sollicitudin neque.
          </li>
        </ul>
        <h4 className="text-xl mb-2 text-gray-800">Education</h4>
        <ul className="list-none ps-5 text-sm description-font   text-gray-600">
          <li>
            <strong className="font-medium">
              Bachelor of Design
            </strong>
            <br />
            Really Great University
            <br />
            2012-2016
            <br />
            123 Anywhere St., Any City
          </li>
          <li>
            <strong className="font-medium">Master of Design</strong>
            <br />
            Really Great University
            <br />
            2016-2020
            <br />
            123 Anywhere St., Any City
          </li>
        </ul>

        <h4 className="text-xl mb-2 text-gray-800">Reference</h4>
        <ul className="list-none ps-5  text-gray-600 text-sm description-font">
          <li>
            <strong className="font-medium">Alfredo Torres</strong>
            <br />
            Director
          </li>
          <li>
            <strong className="font-medium">
              Aldenaire & Partners
            </strong>
            <br />
            +123-456-7890
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Normal