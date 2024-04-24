document.addEventListener("DOMContentLoaded", function() {
    var modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img class="modal-image" src="" alt="Expanded image" style="width: 100%;">
        </div>
    `;
    document.body.appendChild(modal);

    var closeButton = modal.querySelector('.close-btn');
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    var projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var projectId = this.getAttribute('href');
            var detailsContainer = document.getElementById('projectDetails');

            // Toggle the link text and content display
            if (this.textContent.trim() === '+') {
                this.textContent = '−'; // Change to minus sign
                var projectContent = getProjectContent(projectId);
                detailsContainer.innerHTML = projectContent;
                attachImageClickListener(); // Attach click listeners to new images
            } else {
                this.textContent = '+'; // Change back to plus sign
                detailsContainer.innerHTML = ''; // Clear the content
            }

            // Reset other links to "+", except for the current one
            projectLinks.forEach(function(otherLink) {
                if (otherLink !== link) {
                    otherLink.textContent = '+';
                }
            });
        });
    });

    function attachImageClickListener() {
        var expandableImages = document.querySelectorAll('.expandable-image');
        expandableImages.forEach(function(img) {
            img.addEventListener('click', function() {
                var modalImage = document.querySelector('.modal-image');
                modalImage.src = this.src; // Set the source of the modal image to the clicked image
                modal.style.display = "block"; // Display the modal
            });
        });
    }
});

function getProjectContent(projectId) {
    var projectDetails = {
            
            "#modeling": `
            <div>
            <div>
            <div class="project-grid">
            <div class="project-rectangle">
            <h3>blender</h3>
            <p>medieval tavern scene for a larger game design project, built in blender. click to expand!</p>
            <img class="expandable-image" style="width: 80%; margin-top: 5%;" src="images/tavern-highres.png"></div>
             <div class="project-rectangle">
             <h3>taproot</h3>
             <img class="expandable-image" style="width: 80%; margin-top: 5%;" src="images/taproot2.png">
             <p>digital foraging companion app with a focus on indigenous use and sustainable harvesting practices.</p>
             <br><a href="taproot.html">check it out here!</a>
             </div>
             <div class="project-rectangle">
             <h3>sketchify</h3>
             <div id="sketch" style="width: 80%; margin-top: 5%;">
             <video controls>
            <source src="images/sketchify.mov" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div>
            <p>'sketchify' effect applied to videos using procedural generation with Processing.</p>
             </div>
            </div>
        `,
        "#webdev": `
            <div class="project-grid">
            <div class="project-rectangle">
                <h3 id="mise">mise</h3>
                <p style="text-align:left;">a blogging/writing platform specifically for food and cooking writing, developed as an alternative to substack for chefs. fullstack development, built using html/css and javascript with node.js an sql database.</p>
                <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/login.png"><br>
                <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/post.png">
                <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/browse.jpeg">
                <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/about.jpeg">
                <br><br><br>
             </div>
             <div class="project-rectangle">
                <h3>crushd</h3>
                <p>an app for sharing, logging, and recommending natural wine</p>
                <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/crushd1.png"><br>
                <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/app2.png">
                <br><br><br>
             </div>
             <div class="project-rectangle">
             <h3>mix.tape</h3>
                <p>a social platform designed for sharing and reviewing albums, inspired by letterboxd. <br>made with html/css, python, and a django database.</p>
                <iframe width="560" height="515" src="https://www.youtube.com/embed/heenChG4ZoI" title="Cahill CS108 Final Project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
            </div>
             </div>
             <div class="project-grid">
             <div class="project-rectangle">
             <h3>this website!</h3>
             <p>i built this site from scratch using js, css, and html :)</p>
             <br><br><br>
                
             </div>
        `,
        "#graphicdesign": `
            <div>
                <div class="project-grid">
                    <div class="project-rectangle">
                        <h3>live music promotional materials</h3>
                        <p>a set of flyers, playlist covers, and ads for traveling indie rock acts. <br>made in adobe creative suite.</p>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/design1.png"><br>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/design2.png"><br>
                      </div>
                      <div class="project-rectangle">
                        <h3>matches print</h3>
                        <p>design project for personal use. exercise in fonts, colors, and shadows.</p>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/vday.png"><br>
                      <br><br><br>
                     </div> 
                     <div class="project-rectangle">
                        <h3>dublin science gallery redesign</h3>
                        <p>university group project to redesign graphics for the science gallery, a combination art museum and science exhibit associated with trinity college, dublin.</p>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/scigal/scilogo.png"><br>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/scigal/ads.png"><br>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/scigal/banner.png"><br>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/scigal/bus.png"><br>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/scigal/card.png"><br>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/scigal/feed.png"><br>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/scigal/insta.png"><br>
                        <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/scigal/signage.png"><br>
                        <br><br><br>
                     </div> 
                     </div>
                    <div class="project-grid"> 
                     <div class="project-rectangle">
                     <h3>live music promotional materials</h3>
                     <p>a set of flyers, playlist covers, and ads for traveling indie rock acts. <br>made in adobe creative suite.</p>
                     <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/cahill-albumcoverPDF.png"><br>
                     <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/cahill-albumcoverPDF3.png"><br>
                     <img class="expandable-image" style="width: 80%; margin-top: 10%;" src="images/typo-v3.png"><br>
                   </div>  
                   </div>      
            </div>
        `,
        "#game": `
                <div class="project-grid">
                <div class="project-rectangle">
                <h3>odysseus</h3>
                <p>choose-your-own-adventure game set during an Scott's expedition in antarctica, 1912. built in twine with html, css and js.</p>
                <embed src="https://www.scss.tcd.ie/~cahillc2/cyoa/odysseus.html" style="width:500px; height: 300px;">
                <a href="https://www.scss.tcd.ie/~cahillc2/cyoa/odysseus.html">external link!</a>
                </div>
            `,
            "#wordpress": `

                <div class="project-grid">
                    <div class="project-rectangle">
                        <h3>building a bridge back to brown</h3>
                        <a href="https://library.brown.edu/create/rjrc/">link!</a></li><br><br><br>
                        <ul>
                        <li>Spearheaded the Building a Bridge Back to Brown (previously Blacks at Brown) website redesign and relaunch process</li>
                        <li>Subverted the need to integrate a new Wordpress Plugin by hard-coding an image carousel into the homepage</li>
                        <li>Updated and maintained the interactive Black students at Brown Timeline</li>
                        <li>Updated and maintained acknowledgements page</li><br>
                        <img class="expandable-image" style="width: 90%; margin-top: 10%;" src="images/timeline.png">
                        
                    </div>
                    <div class="project-rectangle">
                    <h3>racial justice resource center</h3>
                    <a href="https://library.brown.edu/create/rjrc/">link!</a></li><br><br><br>
                        <ul>
                        <li>created a new site on Brown University's /create server for the Racial Justice Resource Center.</li>
                        <li>worked closely with supervisor Lucy Wang to interpret and execute instructions and content addition from stakeholders.</li><br>
                        <img class="expandable-image" style="width: 90%; margin-top: 10%;" src="images/rjrc.png"><br><br><br>
                    </div>
                    <div class="project-rectangle">
                    <h3>center for digital scholarship redesign</h3>
                    <a href="https://library.brown.edu/create/cds/">link!</a></li><br><br><br>
                        <ul>
                        <li>Took an active role in the web team’s effort to build a new site for the Center for Digital Scholarship</li>
                        <li>Implemented a Lucidspark Chart to improve inter-team understanding of out web content outline as documentation became manifold and confusing</li>
                        <li>Worked closely with an interdisciplinary team to migrate, rebuild, or redesign hundreds of individual pages in the early days of this project
                        </li>
                        <li>Documented and notated the process of using Duplicator Pro to move site from Dev to Prod server</li>
                        <li>Completed significant work in web content, UI organization,  and inter-team communication throughout this project</li>
                        <br>
                        <img class="expandable-image" style="width: 90%; margin-top: 10%;" src="images/cds.png">
                    </div>
                </div>
            `,
            "#academic": `
            <div class="project-grid">
                <div class="project-rectangle">
                    <h3>research grant proposal</h3>
                    <a href="https://docs.google.com/document/d/1oJoxE-SxyGnyLJ9VsFAFmmyqa3c8HXxTAsRKq6kT_gg/edit?usp=drive_link">view proposal</a>
                </div>
                <div class="project-rectangle">
                    <h3>cinematography and visual media paper</h3>
                    <a href="https://docs.google.com/document/d/1M9BvNq33Mdx9vL101uvhXiE_smcZLc8yGR7pq_cq0gw/edit?usp=drive_link">view paper</a>
                </div>
                <div class="project-rectangle">
                    <h3>queer and decolonial studies paper</h3>
                    <a href="https://docs.google.com/document/d/1UW_LXlYUR0ZVfP38qXUNTkAjx61j0eOU2FLSPvKu1Ng/edit">view paper</a>
                </div>
                <div class="project-rectangle">
                    <h3>mobile ui testing walkthrough</h3>
                    <p><strong>client:</strong> tech company<br><strong>tone:</strong> instructional</p>
                    <a href="https://docs.google.com/document/d/10yxovtf0XFHcckG4ETZVKzPbxN0fqXwtlYb0fiD4X5E/edit?usp=drive_link">view guide</a>
                </div>
                <div class="project-rectangle">
                    <h3>web3 crypto wallet setup guide</h3>
                    <p><strong>client:</strong> web3 gaming company<br><strong>tone:</strong> casual, instructional</p>
                    <a href="https://docs.google.com/document/d/1Bk8NB4MUptcjj_ZTVbbbGUaS5Nxcn49tW1dRr50iYL4/edit?usp=drive_link">view guide</a>
                </div>
                <div class="project-rectangle">
                    <h3>project requirements document</h3>
                    <p><strong>client:</strong> telecom company<br><strong>tone:</strong> formal, instructional</p>
                    <a href="https://docs.google.com/document/d/1L4KKMECjntWg05MV2UCgb9lvWADxDx9s1xwuhBySrBg/edit?usp=sharing">view document</a>
                </div>
            </div>`,

        };
    
        return projectDetails[projectId] || "<div class='project-grid'><div class='project-rectangle'><h3>Project Not Found</h3><p>The requested project could not be found. Please try another link.</p></div></div>";
    }
    function attachImageClickListener() {
        var expandableImages = document.querySelectorAll('.expandable-image');
        expandableImages.forEach(function(img) {
            img.addEventListener('click', function() {
                // Expand or shrink the image
                if (this.style.width === "100%") {
                    this.style.width = "80%"; // Shrink back
                } else {
                    this.style.width = "200%"; // Expand to full width
                }
            });
        });
    }
 

