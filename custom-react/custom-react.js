const mainContainer=document.querySelector('#root');
const reactElement= {
    type :'a',
    props :{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit this site'
}
const Render=function(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // mainContainer.appendChild(domElement);
    for (const prop in reactElement.props) {
       // if (Object.hasOwnProperty.call(reactElement.props, prop)) {
            domElement.setAttribute(prop,reactElement.props[prop]);
        //}
    }
    domElement.appendChild(document.createTextNode(reactElement.children));
    mainContainer.appendChild(domElement);
}
Render(reactElement,mainContainer);

