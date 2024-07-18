import { useEffect, useState } from "react";

const Content = () => {
    const [content,setContent] = useState([{type:"text",text:"Hello World"}, {type:'leftImage',image:'https://picsum.photos/200/300'},{type:'rightImage',image:'https://picsum.photos/200/300'}, {type:'doubleImage',image1:'https://picsum.photos/200/300',image2:'https://picsum.photos/200/300'}]);
    useEffect(()=>{

    },[])
  return <div className="content">
    {content.map((item,index)=>{
        if(item.type === 'text'){
            return <div className="content-text">{item.text}</div>
        }else if(item.type === 'leftImage'){
            return <div className="left-image"><img src={item.image} alt="leftImage" /></div>
        }else if(item.type === 'rightImage'){
            return <div className="right-image"><img src={item.image} alt="rightImage" /></div>
        }else if(item.type === 'doubleImage'){
            return <div className="double-image"><img src={item.image1} alt="doubleImage1" /><img src={item.image2} alt="doubleImage2" /></div>
        }
    })}
  </div>;
};

export default Content;