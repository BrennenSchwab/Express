const express = require('express');
const app = express();
const { arrayToIntAndErrorHandle, findMode, findMean, findMedian } = require('./helpers');
const ExpressError = require('./expressError');

app.get('/mean', (req, res) => {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
        }
        let arrayToNums = req.query.nums.split(',');

        let nums = arrayToIntAndErrorHandle(arrayToNums);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }

        let result = {
            operation: "mean",
            result: findMean(nums)
        };

        return res.send(result);
    });

app.get('/median', (req, res) => {
        if (!req.query.nums) {
            throw new ExpressError('Enter a comma-separated list of numbers.', 400);
        }
        let arrayToNums = req.query.nums.split(',');
        let nums = arrayToIntAndErrorHandle(arrayToNums);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }

        let result = {
            operation: "median",
            result: findMedian(nums)
        };

        return res.send(result);

    });

app.get('/mode', (req, res) => {
        if (!req.query.nums) {
            throw new ExpressError('Enter a comma-separated list of numbers.', 400);
        }
        let arrayToNums = req.query.nums.split(',');

        let nums = arrayToIntAndErrorHandle(arrayToNums);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }

        let result = {
            operation: "mode",
            result: findMode(nums)
        };

        return res.send(result);


    });


app.use((next) => {
        const err = new ExpressError("Not Found", 404);
        return next(err);
    });


app.use((err, req, res, next) => {
        res.status(err.status || 500);

        return res.json({
            error: err,
            message: err.message
        });
    });


app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});
