# data-stream-challenge
Coding challenge for data stream CSV parser

## Considerations
    - High priority was to not use any non-native node libraries to reduce package size
    - I waffled between using fs.readFile and fs.createReadStream to read the csv input
        - fs.readFile reads the whole file at once, which can be very memory intensive and slow, but allows for searching, sorting, and grouping the whole file. It's hearsay, but I also read that node handles garbage collection much better when fs.readFile is used.
        - fs.creatReadStream can read the file in chunks and have a maximum buffer size, which reduces overall mem usage. The time would be about the same to read the whole file though, and you would lose out on easily being able to perform operations on the file data.

# TODO
- Create a schema validator for CSV file to flag any bad lines before the CSV is read in
    - Use schema to structure CSV into records
- Host this in a serverless function
    - Create (axios/express) API endpoint to take in csv and return average water temp
- Write some tests
    - Test with invalid csv format
    - average negatives
    - monitoring location not found
- All records are in deg C, but I didn't account for what would happen if they were in F