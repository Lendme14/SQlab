# SQlab
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social Squad - Collaborate & Create</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            text-align: center;
        }
        .header {
            background: #ff5733;
            color: white;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
        }
        .sidebar {
            position: fixed;
            left: -250px;
            top: 0;
            width: 250px;
            height: 100%;
            background: #333;
            color: white;
            padding-top: 20px;
            transition: 0.3s;
        }
        .sidebar a {
            display: block;
            color: white;
            padding: 15px;
            text-decoration: none;
            text-align: left;
        }
        .sidebar a:hover {
            background: #ff5733;
        }
        .sidebar-toggle {
            position: fixed;
            left: 10px;
            top: 10px;
            background: #ff5733;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .btn {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            background: #ff5733;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: 0.3s;
        }
        .btn:hover {
            background: #c70039;
        }
        .slider {
            width: 100%;
            max-width: 800px;
            overflow: hidden;
            margin: 20px auto;
        }
        .slider img {
            width: 100%;
            border-radius: 10px;
        }
        .iframe-ad {
            width: 100%;
            max-width: 800px;
            height: 250px;
            margin: 20px auto;
            border: none;
        }
        .comment-section {
            max-width: 800px;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: left;
        }
        .comment-section textarea {
            width: 100%;
            height: 100px;
            margin-top: 10px;
        }
        .footer {
            background: #333;
            color: white;
            padding: 20px;
            margin-top: 20px;
        }
    </style>
    <script>
        console.log("Page is loading...");
        function toggleSidebar() {
            let sidebar = document.getElementById("sidebar");
            if (sidebar.style.left === "-250px") {
                sidebar.style.left = "0";
                console.log("Sidebar opened.");
            } else {
                sidebar.style.left = "-250px";
                console.log("Sidebar closed.");
            }
        }
        window.onload = function() {
            console.log("Page loaded successfully.");
        };
    </script>
</head>
<body>
    <button class="sidebar-toggle" onclick="toggleSidebar()">☰ Menu</button>
    <div id="sidebar" class="sidebar">
        <a href="signup.html">Sign Up</a>
        <a href="signin.html">Sign In</a>
        <a href="earn.html">Earn</a>
        <a href="community.html">Community</a>
    </div>
    <div class="header">Welcome to Social Squad</div>
    <div class="slider">
        <img src="https://source.unsplash.com/800x400/?collaboration,teamwork" alt="Collaboration Image 1">
        <img src="https://source.unsplash.com/800x400/?content,creators" alt="Collaboration Image 2">
    </div>
    <div class="container">
        <h1>Join the Ultimate Collaboration Platform</h1>
        <p>Connect with YouTubers and Facebook Creators to grow your audience, share content, and create amazing collaborations.</p>
        <a href="signup.html" class="btn">Join Now</a>
        <a href="learnmore.html" class="btn">Learn More</a>
    </div>
    <iframe class="iframe-ad" src="https://www.example.com/ad" title="Advertisement"></iframe>
    
    <div class="comment-section">
        <h3>Leave a Comment</h3>
        <textarea placeholder="Write your comment here..."></textarea>
        <br>
        <button class="btn">Submit</button>
    </div>
    
    <div class="footer">
        <p>Terms and Conditions: By using this platform, you agree to our terms and policies.</p>
        <p>&copy; 2025 Social Squad. All rights reserved.</p>
    </div>
</body>
</html>
