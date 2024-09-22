const ph ={
    nom:(req, res)=>{
        res.render('index');
    },
    about:(req, res)=>{
        res.render('about');
    },
    product:(req, res)=>{
        res.render('product');
    },
    contact:(req, res)=>{
        res.render('contact');
    },
    testimonial:(req, res)=>{
        res.render('testimonial');
    }
}


module.exports = ph;