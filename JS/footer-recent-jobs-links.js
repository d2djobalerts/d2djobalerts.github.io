
const footer_job_links_display ={
    3:{
        a_href:'https://d2djobalerts.github.io/job-posting-pages/deloitte-analyst.html',
        text_value:'Deloitte is hiring for Analyst'
    },
    2:{
        a_href:'https://d2djobalerts.github.io/job-posting-pages/accenture.html',
        text_value:'Accenture is hiring for Data Science Analytics Associate'
    },
    1:{
        a_href:'https://d2djobalerts.github.io/job-posting-pages/google.html',
        text_value:'Google is hiring for Data Analyst'
    },
}


const footer_left = document.querySelector('.footer-left').textContent;
console.log(footer_left);
const objectLength = Object.keys(footer_job_links_display).length;

console.log(objectLength);


for(const a of Object.keys(footer_job_links_display)){
    const tag = footerJobLinksCodeExecute(footer_job_links_display[a]);
    document.querySelector('.footer-left').insertAdjacentHTML('afterbegin',tag)

}  



function footerJobLinksCodeExecute(obj){
    console.log(obj);
    console.log(obj.a_href);
    console.log(obj.text_value);
        let tag = `<p class="footer-job-links">
                    <a href="`+obj.a_href+`">`+ obj.text_value+ `</a></p>`;
    console.log(tag);
    return tag;
}




// --------------------------------------------------------------------


const recent_job_links = document.querySelector('.recent-job').textContent;
console.log(recent_job_links);

console.log(objectLength);


for(const a of Object.keys(footer_job_links_display)){
    const tag = footerJobLinksCodeExecute(footer_job_links_display[a]);
    document.querySelector('.recent-job').insertAdjacentHTML('afterbegin',tag)

}  



function footerJobLinksCodeExecute(obj){
    console.log(obj);
    console.log(obj.a_href);
    console.log(obj.text_value);
        let tag = `<p class="recent-job-links">
                    <a href="`+obj.a_href+`">`+ obj.text_value+ `</a></p>`;
    console.log(tag);
    return tag;
}

//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------

let menu_links = `
<div class="menu-icon">
                    <i class="fa-solid fa-bars"></i>
                </div>              
                <div class="menu-links">
                    <a href="https://d2djobalerts.github.io/index.html">IT/Non-IT JOBS</a>
                    <a href="https://d2djobalerts.github.io/government-jobs.html">GOVT JOBS</a>
                    <a href="https://d2djobalerts.github.io/free-certificates.html">FREE CERTIFICATES</a>
                    <a href="https://d2djobalerts.github.io/blogs/news/blogs-index.html">BLOGS</a>                   
                </div>
`;

document.querySelector('.menu').insertAdjacentHTML('afterbegin',menu_links);
