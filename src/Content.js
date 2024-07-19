import { useEffect, useState } from "react";

const Content = () => {
    const [content,setContent] = useState([
        {type:"text", description:"This is a demo site for a made up marketing firm, The site itself acts as a demo for what the features are!"}, 
        {type:'leftImage',image:'https://cdn.sanity.io/images/xtd5vd85/production/04bcc02d7777b7cec8835a7af1b3f934c42d8529-1200x1600.jpg?q=100&w=800', title:"This is a title", description:"This is a description"},
        {type:'rightImage',image:'https://cdn.sanity.io/images/xtd5vd85/production/04bcc02d7777b7cec8835a7af1b3f934c42d8529-1200x1600.jpg?q=100&w=800', title:"This is a title", description:"This is a description"}, 
        {type:'doubleImage',image1:'https://cdn.sanity.io/images/xtd5vd85/production/04bcc02d7777b7cec8835a7af1b3f934c42d8529-1200x1600.jpg?q=100&w=800',image2:'https://cdn.sanity.io/images/xtd5vd85/production/04bcc02d7777b7cec8835a7af1b3f934c42d8529-1200x1600.jpg?q=100&w=800', title:"This is a title", description:"This is a description"}
    ]);
    useEffect(()=>{

    },[])
  return <div className="content">
    {content.map((item,index)=>{
        if(item.type === 'text'){
            return <div className="content-text">{item.description}</div>
        }else if(item.type === 'leftImage'){
            return <div className="image"><div>{item.icon&&item.icon}</div><div className="left-image"><img src={item.image} alt="leftImage" /><div className="image-text left-text"><h3 className="title">{item.title}</h3><p className="description">{item.description}</p></div></div></div>
        }else if(item.type === 'rightImage'){
            return <div className="image"><div className="right-image"><img src={item.image} alt="rightImage" /><div className="image-text right-text"><h3 className="title">{item.title}</h3><p className="description">{item.description}</p></div></div><div>{item.icon&&item.icon}</div></div>
        }else if(item.type === 'doubleImage'){
        return <div className="doubleImageContainer"><div></div><div className="double-image"><img src={item.image1} alt="doubleImage1" /><img src={item.image2} alt="doubleImage2" /></div><div className="image-text center-text"><h3 className="title">{item.title}</h3><p className="description">{item.description}</p></div></div>
        }else if(item.type === 'twothirdsImageLeft'){
            return <div className="twothirdsImageContainer"><div></div><div className="twothirds-image"><img src={item.image1} alt="twothirdsImage1" /><img src={item.image2} alt="twothirdsImage2" /></div><div className="image-text center-text"><h3 className="title">{item.title}</h3><p className="description">{item.description}</p></div></div>
        }else if(item.type === 'twothirdsImageRight'){
            return <div className="twothirdsImageContainer"><div></div><div className="twothirds-image"><img src={item.image1} alt="twothirdsImage1" /><img src={item.image2} alt="twothirdsImage2" /></div><div className="image-text center-text"><h3 className="title">{item.title}</h3><p className="description">{item.description}</p></div></div>
        }
    })}
  </div>;
};

export default Content;