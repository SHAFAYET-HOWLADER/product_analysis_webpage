import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='container'>
            <h1>Frequently ask question : </h1>
             <div className='question'>
                 <h3>
                     1. Explanation about Context API :
                 </h3>
                 <p>
                   Context api gives us  a way to pass data among the component  without  passing props down manually at every level.
                   In React application, data is passed parent to child using props objects.
                   Context is generally used when some data needs to be accessible by many components at different nesting levels. 
                   Apply it sparingly because it makes component reuse more difficult.
                   If you want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                 </p>
             </div>

             <div className='question'>
                 <h3>
                     2. Different between Inline element and block  element :
                 </h3>
                 <p>
                   Block element generally takes horizontally full width.we can styles on block element like
                   height, width, margin, padding.
                   Block elements are a kind of blocks where there are many elements in a line itself. 
                   While inline elements take up the space of an entire line and there will be only one line within the space width.
                   Inline elements do not respect the top and bottom margins but only the left and right and also consider the padding.
                 </p>
             </div>
             <div className='question'>
                 <h3>
                     3. Explanation about html5 semantic tag :
                 </h3>
                 <p>
                   HTML5 semantic tags define the purpose of the element.
                  By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. 
                  By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.
                  Example : [ header, footer, nav, main, section, figure and etc].
                 </p>
             </div>
        </div>
    );
};

export default Blog;
