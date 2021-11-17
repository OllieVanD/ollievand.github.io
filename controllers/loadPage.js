const loadPage = async (req, res) => {
    res.render('homePage.ejs');
}

module.exports = {loadPage};