import React from "react";
import KSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hcarosal = () => {
  const settingsLg = {
    
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    centerPadding:"100px",
    infinite: true,
  }
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding:"100px",
    slidesToScroll: 1,
  };
  // const images = [
  //   "https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg",
  //   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=31.73",
  //   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=31.73",
  //   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=31.73",
  //   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=31.73"
  // ];
  return (
    <>
    <div className="lg:hidden">
    <KSlider {...settings}>
      {/* images.map((image) => (
        <div>
          <img src={image} />
        </div>
      )) */}
      <div className="w-full h-40 md:72 p-3">
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full"/>
        </div>
        <div className="w-full h-44 p-3">
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full" />
        </div>
        <div className="w-full h-44 p-3">
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full" />
        </div>
        <div className="w-full h-44 p-3"> 
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full" />
        </div>
        <div className="w-full h-44 p-3"> 
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full" />
        </div>
        <div className="w-full h-44 p-3"> 
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full" />
        </div>
        <div className="w-full h-44 p-3"> 
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full" />
        </div>
        <div className="w-full h-44 p-3"> 
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full" />
        </div>
        <div className="w-full h-44 p-3"> 
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full" />
        </div>
        <div className="w-full h-44 p-3"> 
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full" />
        </div>
    </KSlider>
    </div>

    <div className="hidden lg:block" >
    <KSlider {...settingsLg}>
      {/* images.map((image) => (
        <div>
          <img src={image} />
        </div>
      )) */}
      <div className="w-20 h-96 px-3">
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full rounded-md"/>
        </div>
        <div className="w-20 h-96 px-3">
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full rounded-md" />
        </div>
        <div className="w-20 h-96 px-3">
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full rounded-md" />
        </div>
        <div className="w-20 h-96 px-3"> 
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full rounded-md" />
        </div>
        <div className="w-20 h-96 px-3">
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full rounded-md"/>
        </div>
        <div className="w-20 h-96 px-3">
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full rounded-md" />
        </div>
        <div className="w-20 h-96 px-3">
          <img src="https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_jpg.jpg" className="h-full w-full rounded-md" />
        </div>
        <div className="w-20 h-96 px-3"> 
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3VWgW9Co1xXH4ehVBL3zGk/79e648b658ea0e86d3b1d0b34480631c/All_in_one_bucket_1440x396px_109.jpg?w=1536&fit=fill&fm=webp" className="h-full w-full rounded-md" />
        </div>
    </KSlider>
    </div>
 
    </>
  )
};

export default Hcarosal;