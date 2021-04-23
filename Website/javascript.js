function ButtonClick(id) {
        if(id =='AboutMe') {
            document.getElementById("MainText").innerHTML = '<img id="abtimg" src="flutescreenshot.PNG"><div id="abttext">Welcome to my homepage! My name is Rudra Sarker Das. I live with my parents in Spring, TX, USA. It is a beautiful city just north of Houston.<br><br>I study in the 7th grade at <a href="https://york.conroeisd.net/">York Junior High School</a>. I love my school. Math and Science are my favorite subjects. I also love playing the flute. Yes, that is me playing it in front of our house.<br><br> I am a brown belt in karate. I practice in the wonderful <a href="http://www.thewoodlandsshotokan.com/">TWSK</a> dojo run by <a href="http://www.thewoodlandsshotokan.com/instructors">Sensei Dennis Livotto (6th Dan)</a>. I also dabble in computer programming. This webpage is a result of it! Please take the time to browse through it. Do not forget to play the fun numerology game that I have constructed in the projects tab.<br><br> Thanks for your time! I hope you enjoyed it!</div>';
        } else if(id =='Skill') {
            document.getElementById("MainText").innerHTML = '' 
            + '<h2>Karate</h2><div id="awdimg" class="alternatecap">Here is a video of me practicing EMPI kata in the '
            +'living room.<br><br> </div><video id="awdimg" width="320" height="240" controls>'
            +'<source  src="pictures/Empi_Kata.mp4" type="video/mp4"></video> <br><br><br><br><div id="awdimg" class="vidcap"> '
            +'A picture of me with'
            +' Kancho Nobuaki Kanazawa,'
            +'5 time winner of the Shotokan Karate International Federation(SKIF) Japan Nation Championships and' 
            +'winner of the 2000 SKIF World Championships as the "Grand Champion". He is the current leader of SKIF.</div>'
            +'<img id="awdimg" src="pictures/Kancho.JPG"></img>' 
            +'<h2>Flute</h2>'
            +'<div id="awdimg" class="alternatecap">A video of me practicing for a band winter audition.</div><br>'
            +'<video id="awdimg" width="320" height="240" controls> <source src="pictures/Song2.mp4" type="video/mp4">'
            +'</video>'
            +'<div id="awdimg" class="alternatecap"><br><br><br>A video-clip of me playing at the annual '
            +'school concert.</div><br>'
            +'<video id="awdimg" width="320" height="240" controls><source src="pictures/Concert2.mp4" '
            +'type="video/mp4"></video><br><br><br><br>'
            +'<div id="awdimg" class="alternatecap">Two more audio clips of me playing my flute.</div>'
            +'<audio id="awdimg" controls><source src="pictures/Scherzino.mp3" type="audio/mpeg">'
            +'</audio><audio id="awdimg" controls><source src="pictures/Sonata in F.mp3" type="audio/mpeg"></audio>';
        } else if(id == 'Award') {
            document.getElementById("MainText").innerHTML = '<br><br><div id="awdimg" class="vidcap">'
            +'Awards earned for <u>outstanding character</u> and <u>mastery</u> in <u>science</u> in school.</div>'
            +'<img id="awdimg" src="Science&CharacterTrophies.jpg"></img>'
            +'<br><br><div id="awdimg" class="vidcap">Trophies and medals won from various <u>karate</u> tournaments.</div>'
            +'<img id="awdimg" src="pictures/Karate Trophies (1).jpg"></img><img id="awdimg" src="Karate Medals.jpg"></img>'
            +'<br><br><div id="awdimg" class="alternatecap">Trophies from local chess tournaments</div>'
            + '<img id="awdimg" src="Chess Trophies.jpg"></img>'
            + '<br><br><div id="awdimg" class="alternatecap">Medals from playing <u>flute</u> in school</div>'
            +' <img id="awdimg" src="Flute Medals.jpg"></img> '
            +'<h2>Udemy Course Certificates</h2> <img id="udem" src="JS-certificate.jpg"></img>' 
            +'<img id="udem" src="HTML-certificate.jpg"></img>'
            +' <img id="udem" src="SQL-certificate.jpg">'
            +'</img> <img id="udem" src="Excel-certificate.jpg"></img>'
            +'<h2>Flute Certificate</h2>'
            +'<img id="awdimg" src="pictures/6th-Flute.jpg"></img>'
            +'<h2>Karate Certificate</h2>'
            +'<img id="awdimg" src="pictures/1st-Kyu (1).jpg"></img>"';

        } else if(id =='Project') {
            document.getElementById("MainText").innerHTML = '<h2>Drone</h2>'
            +'<div id="awdimg" class="vidcap">'
            +'<br>Video of me flying a drone in the living room. I constructed and programmed this drone as'
            +' a part of a project. I attached the mainframe to the drone frame and properly assembled the motors and '
            +"the propellers. Finally, I calibrated the Yaw, Pitch, Throttle, and Roll and set up "
            +"the drone's accelormeter  using the Betaflight configurator. </div>"
            +'<iframe src="https://drive.google.com/file/d/1sHw6Fgpczabr_L6V7-tiRLNrx0iSDz_e/preview" id="awdimg" width="340" height="480"></iframe><br><br><br><br>'
            +'<h2>Independant Science Project</h2>'
            +'<div id="awdimg" class="vidcap">'
            +' I have done research on the life and work of the celebrated scientist Michael Farday. I have compiled the results of '
            +'my study <a href="https://sites.google.com/studentmail.conroeisd.net/20-21-yo-rice-faraday/home">'
            +'here.</a></div><br><br><br>'
            +'<h2>Numerology Prediction - have fun!</h2>'
            + '<div id="awdimg" class="vidcap">I coded the following astrology program in Javascript for fun! '
            +'Just enter your full name in the box below, and click Submit. Scroll down for the answer and enjoy!!' +
            '<br><input type="text" id="NumerInput"><br><button onclick="Numerology()" id="NumerBtn">'+
            'Submit</button></div><br><div id="answer"></div><br><br>';
            

        } else if(id =='Contact') {
            document.getElementById("MainText").innerHTML = '<h2><em>Report Cards</em></h2>'
            +'<div id="awdimg" class="cp"><em>7th Grade</em></div>'
            +'<div id="awdimg" class="alternatecap" id="alternatecap">Algebra I(9th Grade Math): 99% '
            +'&nbsp;Science: 99% '
            +'<br>Language Arts: 99% &nbsp;Texas History: 100%  <br>'
            +'Physical Education: 100% &nbsp;Wind Ensemble(Band): 100%<br>Teen Leadership: 99% </div>'
            +'<img id="reportcard" src="pictures/7th-ReportCard.jpg"></img>'
            +'<div id="awdimg" class="cp"><br><br><em>Credit By Exam Score(8th Grade Math Test Taken During 6th Grade)</em></div>'
            +'<div id="awdimg" class="alternatecap">98%</div>'
            +'<img id="reportcard" src="pictures/CBE-CISD.jpg"></img>'
            +'<div id="awdimg" class="cp"><em>6th Grade</em></div>'
            +'<div id="awdimg" class="alternatecap">Math: 99% &nbsp;Science: 100%<br>Reading: 97% '
            +'&nbsp;Writing: 98%<br> Social Studies: 100% &nbsp;Physical Education: 100%<br> Band: 100%</div>'
            +'<img id="reportcard" src="pictures/6th-ReportCard.jpg"></img>'
            +'<div id="awdimg" class="cp"><br><br><em>5th Grade</em></div>'
            +'<div id="awdimg" class="alternatecap">Math: 99% &nbsp;Science: 99%<br>Reading: 94% &nbsp;Writing: 97%<br>'
            +'Social Studies: 98%'
            +' &nbsp;Physical Education: 100%<br> Band:100%</div>'
            +'<img id="reportcard" src="pictures/5th-ReportCard.jpg"></img> '
            +'<div id="awdimg" class="cp"><em><br><br>5th Grade Advanced Math Scores</em></div>'
            +'<div id="awdimg" class="alternatecap">5th Grade Advanced Math Test: 100%<br>'
            +'5th Grade Math STAAR: 97%</div>'
            +'<img id="reportcard" src="pictures/5th-STAAR-Score.jpg"></img> '
            +'<div id="awdimg" class="cp"><em><br><br>4th Grade</em></div>'
            +'<div id="awdimg" class="alternatecap">Math: 97% &nbsp;Science: 96%<br>'
            +'Language Arts: 95% &nbsp;Social Studies: 98%</div>'
            +'<img id="reportcard" src="pictures/4th-ReportCard.jpg"></img> '
            +'<div id="awdimg" class="cp"><em><br><br>3rd Grade</em></div>'
            +'<div id="awdimg" class="alternatecap">Math: 96% &nbsp;Science: 99%<br>'
            +'Language Arts: 96% &nbsp;Social Studies: 96%</div>'
            +'<img id="reportcard" src="pictures/3rd-ReportCard.jpg">'
            +'<div id="awdimg" class="cp"><em><br><br>2nd Grade</em></div>'
            +'<div id="awdimg" class="alternatecap">Math: 98% &nbsp;Science: 100%<br>'
            +'Language Arts: 98% &nbsp;Social Studies: 99%</div>'
            +'<img id="reportcard" src="pictures/2nd-ReportCard.jpg"></img> '
            +'<div id="awdimg" class="cp"><em><br><br>1st Grade</em></div>'
            +'<div id="awdimg" class="alternatecap">Math: 97% &nbsp; Science: 98%<br>'
            +'Language Arts: 98% &nbsp;Social Studies: 92%</div>'
            +'<img id="reportcard" src="pictures/1st-ReportCard-School2.jpg"></img>';
        } else {
            document.getElementById("MainText").innerHTML = 'error';
        }
        



};

// <p>My name is Rudra Sarker Das. I am a 7th Grader that lives in the state of Texas in the United States of America.</p>

/* 
        <div id="AboutMePage">
            Under Construction
        </div>

        <div id="SkillsPage">
            Under Construction
        </div>

        <div id="AwardsPage">
            Under Construction
        </div>

        <div id="ProjectsPage">
            Under Construction
        </div>

        <div id="ContactsPage">
            Under Construction
        </div>
        document.getElementById("MainText").innerHTML = 'Under Construction';
        <figure><img id="awdimg" src=""></img><figcaption></figcaption></figure>
*/
