const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/module/:id', (req, res) => {
    const moduleId = req.params.id;

    // Sample module data (replace with real data from your database)
    const module = {
        module_name: "Module 1",
        module_description: "Module 1 description",
        activity_list: [
            {
                type: "video",
                data: {
                    activity_name: "Python for Beginners",
                    activity_url: "https://youtu.be/kqtD5dpn9C8?si=aqnpbRj3xqkgO-Eg"
                }
            },
            {
                type: "assessment",
                data: {
                    test_name: "Only MCQs",
                    no_of_attempt: 5,
                    test_id: "124603"
                }
            }
        ]
    };

    // Extract video URL from module data
    const videoActivity = module.activity_list.find(activity => activity.type === 'video');
    const videoUrl = videoActivity ? videoActivity.data.activity_url : null;

    // Render the dashboard view, passing module data and video URL
    res.render('dashboard', { module, videoUrl, showQuizButton: false, testId: null });
});

app.get('/assignment/:testId', (req, res) => {
    const testId = req.params.testId;

    // Sample module data (replace with real data from your database)
    const module = {
        module_name: "Module 1",
        module_description: "Module 1 description",
        activity_list: [
            {
                type: "video",
                data: {
                    activity_name: "Python for Beginners",
                    activity_url: "https://youtu.be/kqtD5dpn9C8?si=aqnpbRj3xqkgO-Eg"
                }
            },
            {
                type: "assessment",
                data: {
                    test_name: "Only MCQs",
                    no_of_attempt: 5,
                    test_id: testId
                }
            }
        ]
    };

    // Render the dashboard with the test button visible
    res.render('dashboard', { module, videoUrl: null, showQuizButton: true, testId });
});

app.get('/', (req, res) => {
    const moduleId = req.params.id;

    // Sample module data (replace with real data from your database)
    const module = {
        module_name: "Module 1",
        module_description: "Module 1 description",
        activity_list: [
            {
                type: "video",
                data: {
                    activity_name: "Python for Beginners",
                    activity_url: "https://youtu.be/kqtD5dpn9C8?si=aqnpbRj3xqkgO-Eg"
                }
            },
            {
                type: "assessment",
                data: {
                    test_name: "Only MCQs",
                    no_of_attempt: 5,
                    test_id: "124603"
                }
            }
        ]
    };

    // Extract video URL from module data
    const videoActivity = module.activity_list.find(activity => activity.type === 'video');
    const videoUrl = videoActivity ? videoActivity.data.activity_url : null;

    // Render the dashboard view, passing module data and video URL
    res.render('dashboard', { module, videoUrl, showQuizButton: false, testId: null });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
