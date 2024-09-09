'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isLeaving) {
        e.preventDefault();
        e.returnValue = '';
        setShowNewsletter(true);
        setIsLeaving(true);
        return '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isLeaving]);

  const closeNewsletter = () => {
    setShowNewsletter(false);
    setIsLeaving(false);
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    closeNewsletter();
    setIsLeaving(true);
  };

  const handleImageClick = (src) => {
    setEnlargedImage(src);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const handleDownload = () => {
    router.push('/checkout');
  };

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white text-black">
        <div className="md:w-1/2 p-4 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">Just Fill-Up & Print !</h1>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-24 rounded relative overflow-hidden cursor-pointer" onClick={() => handleImageClick(`/placeholder${i + 1}.jpg`)}>
                <Image
                  src={`/placeholder${i + 1}.jpg`}
                  alt={`Placeholder image ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <p className="text-2xl font-bold mb-2"><span className="line-through text-gray-400">$99.00</span> $49.00</p>
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded" onClick={handleDownload}>Download</button>
          <div className="mt-4 flex items-center">
            <span className="mr-2">🔒</span>
            <span>Guaranteed safe & secure checkout</span>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <div className="mb-4">
            <span className="text-yellow-400">★★★★★</span> 4.8 out of 5 • 373 Downloads
          </div>
          <h2 className="text-2xl font-bold mb-2">Laundromat Business Plan + Financial Model</h2>
          <p className="mb-4">58 Page Business Plan & 21 Tab Financial Model</p>
          <div className="bg-gray-200 h-48 mb-4 relative overflow-hidden cursor-pointer" onClick={() => handleImageClick('/main-placeholder.jpg')}>
            <Image
              src="/main-placeholder.jpg"
              alt="Main placeholder image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Executive Summary</h3>
          <p className="mb-4">
            <strong>XYZ Escape Room</strong> is founded by <strong>Entrepreneur Name</strong> and is located in <strong>Michigan</strong>.
            The founder has more than 5 years of expereince in the industry and has first hand experience of operating 2 escape rooms before. 
            Our USP involves our location as there is lack of competition in close proximity to our location. 
          </p>
          
          <h4 className="text-lg font-bold mb-2">Mission</h4>
          <p className="mb-4">
          To deliver high-quality products/services that exceed customer expectations, while fostering innovation and sustainable growth.
          </p>
          
          <h4 className="text-lg font-bold mb-2">Vision</h4>
          <p className="mb-4">
          To become a leading provider in our industry, recognized for excellence, integrity, and positive impact on our community.
          </p>
          
          <h4 className="text-lg font-bold mb-2">Industry Overview</h4>
          <p className="mb-4">
          The industry has a global market size of $[XX] and US market size is $[yy]. The industry is expected to grow at a rate of [x]% reading $[xx] by 2030. Some of the major growth factors include [XYZ]. There are certain risks involved with industry such as [XYZ]. 
          </p>
          
          <h3 className="text-xl font-bold mb-2">Business Description</h3>
          <p className="mb-4">
            <strong>Business Name:</strong> Universal Laundromat<br />
            <strong>Founder:</strong> Jacob Harris
          </p>
          
          <h4 className="text-lg font-bold mb-2">Management Team:</h4>
          <div className="overflow-x-auto">
            <table className="w-full mb-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2">Founder</td><td className="p-2">To be filled</td></tr>
                <tr><td className="p-2">Operations Manager</td><td className="p-2">To be filled</td></tr>
                <tr><td className="p-2">Accountant</td><td className="p-2">To be filled</td></tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="text-lg font-bold mb-2">Goals:</h4>
          <ul className="list-none pl-5 mb-4">
            <li className="mb-2 flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              To consistently provide an exceptional customer experience through the use of state-of-the-art equipment and excellent customer service.
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Boost revenue by 23% within the next 13 months.
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Increase distribution reach by 12% within the next 17 months
            </li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Products:</h4>
          <ul className="list-none pl-5 mb-4">
            <li className="mb-2 flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              [Product 1]
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              [Product 2]
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              [Product 3]
            </li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Financials</h4>
          <p className="mb-4"></p>
          <p className="mb-4">
            The dashboard allows you to get a snapshot of your overall financial performance over the projected years
          </p>

          {/* Financials chart image - now clickable */}
          <div className="mb-4 cursor-pointer" onClick={() => handleImageClick('/financials-4.jpg')}>
            <Image
              src="/financials-4.jpg"
              alt="financials"
              width={960}
              height={540}
              layout="responsive"
            />
          </div>
          <p className="mb-4">
            Write about this financials
          </p>

          {/* Financials chart image - now clickable */}
          <div className="mb-4 cursor-pointer" onClick={() => handleImageClick('/financials-4.jpg')}>
            <Image
              src="/financials-4.jpg"
              alt="financials"
              width={960}
              height={540}
              layout="responsive"
            />
          </div>
          <p className="mb-4">
            Just enter the numbers and get the charts and graphs automatically inserted into the business plan. Export in Google Sheet/ Googgle Doc or PDF
          </p>

          {/* Financials chart image - now clickable */}
          <div className="mb-4 cursor-pointer" onClick={() => handleImageClick('/financials-1.jpg')}>
            <Image
              src="/financials-1.jpg"
              alt="financials"
              width={960}
              height={540}
              layout="responsive"
            />
          </div>
          
          <p className="mb-4">
            The model will adjust according to your revenue and growth projections. It will indicate that you need more investment if you increase revenue projections. 
          </p>

          <div className="mb-4 cursor-pointer" onClick={() => handleImageClick('/financials-2.jpg')}>
            <Image
              src="/financials-2.jpg"
              alt="financials"
              width={960}
              height={540}
              layout="responsive"
            />
          </div>

          <p className="mb-4">
            In case your assets do not support the revenue generation then it will be indicated in the CapEx model.
          </p>

          <div className="mb-4 cursor-pointer" onClick={() => handleImageClick('/financials-3.jpg')}>
            <Image
              src="/financials-3.jpg"
              alt="financials"
              width={960}
              height={540}
              layout="responsive"
            />
          </div>

          <h4 className="text-lg font-bold mb-2">Organizational Overview</h4>
          <p className="mb-4">
            Organizational Overview helps identify overall structure of the business in terms of hierarchy and job description. This will help you identify the positions for which you need to recruit. The organogram included in the template helps your drag and drop content with ease. There are multiple pre-made designs to choose from. Change the hierarchy and structure in any way you want.
          </p>

          {/* Organizational chart image */}
          <div className="mb-4 cursor-pointer" onClick={() => handleImageClick('/organizational-chart.jpg')}>
            <Image
              src="/organizational-chart.jpg"
              alt="Organizational Chart"
              width={800}
              height={600}
              layout="responsive"
            />
          </div>

          <p className="mb-4">
            Customize images and texts in the organogram and choose from 27 different styles. 
          </p>
        </div>
      </div>

      {showNewsletter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Before You Go...</h2>
            <p className="mb-4">Subscribe to our newsletter for exclusive business plan tips!</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={closeNewsletter}
                className="bg-gray-200 text-black font-bold py-2 px-4 rounded"
              >
                No, thanks
              </button>
              <button 
                onClick={handleSubscribe}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeEnlargedImage}>
          <div className="relative w-auto h-auto max-w-[90%] max-h-[90%]">
            <Image
              src={enlargedImage}
              alt="Enlarged image"
              layout="responsive"
              width={1000}
              height={1000}
              objectFit="contain"
            />
            <button 
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                closeEnlargedImage();
              }}
            >
              X 
            </button>
          </div>
        </div>
      )}
    </>
  );
}