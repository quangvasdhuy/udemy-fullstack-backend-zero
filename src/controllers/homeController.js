const getHomepage = (req,res) => {
  return res.render('home.ejs')
}

const getABC = (req,res) => {
    res.send("ABC");
}

const hoidanIT = (req,res) => {
    res.render("sample.ejs");
}

module.exports = {
    getHomepage,
    getABC,
    hoidanIT
}