// create router - figures out if request what code to run\
const express = require('express')

const router = express.Router() // figures out what code to run in response to a request
// typically based on the URL and the method, GET, POST, etc

// tell router what URLs can you respond to and what to do
// write code to help router know what to do
router.get('/', function(req, res, next) { // arguments response, request, next
    // name of Handlebars file - name of template - optional object with data
    res.render('index', { 
        title: 'feedback application',
        author: 'Mike',
        timePageLoadedAt: new Date(),
    })

} ) // get request to homepage '/'

// root to new page - display student feedback form
router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next) {
    // server should access form data
    // show new page that says thank, confirms user entry
    // const formData = req.query // for a GET request - read URL query
    const formData = req.body // for a POST request -
    console.log(formData)

    // TODO - save to a database
    // automatically email someone when feedback was submitted

    res.render('thank_you', { 
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']

    })
})

// needs to be very last line in file
module.exports = router // router object provided to index router in server.js