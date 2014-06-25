# Profiler – For the Data-viz Developer
Profiler is a responsive template for profiling individuals. An example: [http://goo.gl/mLA9FT](http://goo.gl/mLA9FT)

It uses Google Drive for data storage, and has space for 3 data fields and a blurb. Chances are a writer/reporter has come to you wanting to use this. Congrats.

### Getting Started with Profiler
1. Make sure your writer has read their instruction sheet. The whole process could take a few hours, and you'll want it to go as smoothly as possible.

2. Give the writer your Google email address so they can share the spreadsheet with you.

3. Do NOT change anything on row 1 or column A. Profiler uses these fields.

4. Download the Profiler HTML template: [https://github.com/ForeignPolicyMagazine/profiler/archive/indev.zip](https://github.com/ForeignPolicyMagazine/profiler/archive/indev.zip)

We make improvements often, so be sure to download a new copy regularly. Extract it to a new folder.

5. The image section is a bit fiddly. All images should be exactly 460px wide by 540px tall. Anything else will stretch, making your life hell. Save your files with a .jpg extension under the imgs directory. Copy and paste the filename to the image field of the Google spreadsheet.

6. Once all the information is entered, press File → Publish to the web.

7. In the Publish window, you'll find a URL that will contain a key. Copy that and paste into line 28 of index.html. If you mess this step up, nothing will work.

8. To change the labels of Data1, Data2, and Data3, open up js/compiled/display-template.runtime.js. Edit lines 9, 10, and 11.

WIP