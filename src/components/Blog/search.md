<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro to Artificial Intelligence</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            color: #333;
        }
        h1, h2, h3, h4 {
            color: #000;
        }
        h2 {
            margin-top: 30px;
        }
        h3 {
            margin-top: 20px;
        }
        h4 {
            margin-top: 15px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<h1>Intro to Artificial Intelligence</h1>

<p>AI enables computers to mimic human-like tasks, such as:</p>
<ul>
    <li><strong>Recognizing Faces</strong>: Identifying people in photos (e.g. Facebook's photo tagging).</li>
    <li><strong>Playing Games</strong>: Beating world champions in board games (e.g. Deep Blue in chess).</li>
    <li><strong>Understanding Speech</strong>: Interpreting voice commands (e.g. Siri or Google Assistant).</li>
</ul>

<h2>Core Concepts in AI</h2>

<h3>Search Algorithms</h3>
<ul>
    <li>The purpose of sersach algorithms is to find the best solution from a starting point to a goal.</li>
    <li><strong>Example</strong>: A delivery robot finding the quickest route in a warehouse.</li>
</ul>


<h4>Components of Search</h4>
<ul>
    <li><strong>Agent</strong>: The robot navigating the warehouse.</li>
    <li><strong>State</strong>: The robot’s current location.</li>
    <li><strong>Initial State</strong>: The robot's starting point in the warehouse.</li>
    <li><strong>Actions</strong>: Possible movements (e.g., move left, right, forward, backward).</li>
    <li><strong>Transition Model</strong>: Describes the new location after a move.</li>
    <li><strong>State Space</strong>: All possible locations the robot can reach.</li>
    <li><strong>Goal Test</strong>: Determines if the robot has reached the delivery spot.</li>
    <li><strong>Path Cost</strong>: Time or distance required for the robot to reach the goal.</li>
</ul>

<br>

<h3>Search Algorithms</h3>
<ul>
    <li><strong>Depth-First Search (DFS)</strong>
        <ul>
            <li><strong>Approach</strong>: Explores one path deeply before trying another.</li>
            <li><strong>Example</strong>: Searching for a lost item in every drawer before moving to another room.</li>
            <li><strong>Data Structure</strong>: Stack (Last In, First Out).</li>
        </ul>
    </li>
    <li><strong>Breadth-First Search (BFS)</strong>
        <ul>
            <li><strong>Approach</strong>: Explores all nearby options before going deeper.</li>
            <li><strong>Example</strong>: Checking every desk in a row for lost items before moving to the next row.</li>
            <li><strong>Data Structure</strong>: Queue (First In, First Out).</li>
        </ul>
    </li>
    <li><strong>Greedy Best-First Search</strong>
        <ul>
            <li><strong>Approach</strong>: Chooses the path that seems closest to the goal based on a heuristic.</li>
            <li><strong>Example</strong>: A navigation app suggesting routes based on estimated traffic conditions.</li>
        </ul>
    </li>
    <li><strong>A* Search</strong>
        <ul>
            <li><strong>Approach</strong>: Considers both the cost to reach the current point and the estimated cost to the goal.</li>
            <li><strong>Example</strong>: A GPS system calculating the best driving route considering both distance and traffic.</li>
        </ul>
    </li>
</ul>

<br>

<h3>Adversarial Search</h3>
<ul>
    <li><strong>Minimax Algorithm</strong>
        <ul>
            <li><strong>Purpose</strong>: Used in competitive scenarios like games.</li>
            <li><strong>Example</strong>: A chess AI deciding the best move considering both the player's and opponent’s strategies.</li>
        </ul>
    </li>
    <li><strong>Alpha-Beta Pruning</strong>
        <ul>
            <li><strong>Purpose</strong>: Optimizes Minimax by cutting off branches that won't affect the final decision.</li>
            <li><strong>Example</strong>: A chess program skipping moves that are obviously worse than previously evaluated moves.</li>
        </ul>
    </li>
    <li><strong>Depth-Limited Minimax</strong>
        <ul>
            <li><strong>Approach</strong>: Limits the search to a certain number of moves and uses an evaluation function for further decisions.</li>
            <li><strong>Example</strong>: A game AI assessing possible moves up to a certain depth and estimating the best move based on board configuration.</li>
        </ul>
    </li>
</ul>

<p>These concepts and examples illustrate how AI systems solve complex problems efficiently and effectively.</p>

</body>
</html>
