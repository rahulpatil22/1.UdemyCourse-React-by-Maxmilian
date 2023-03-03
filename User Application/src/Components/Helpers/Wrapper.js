const Wrapper = props =>{
    //children props holds all the content you are passing between the opening and closing tag of your custom component
    // in dom there will be a app comp return div , not a wrapper div in add user,inside of that nothing will be rendered in Real Dom
    return props.children;  //it is a adjucent content in adduser return ,but it not return directly in code,that why it is not issue
};
export default Wrapper;