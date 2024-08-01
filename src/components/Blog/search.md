# Intro to Artificial Intelligence

AI enables computers to mimic human-like tasks, such as:
- **Recognizing Faces**: Identifying people in photos (e.g., Facebook's photo tagging).
- **Playing Games**: Beating world champions in board games (e.g., Deep Blue in chess).
- **Understanding Speech**: Interpreting voice commands (e.g., Siri or Google Assistant).

<br><br>
## Core Concepts in AI

### Search
- **Definition**: Finding the best solution from a starting point to a goal.
- **Example**: A delivery robot finding the quickest route in a warehouse.

<br><br>
#### Components
- **Agent**: The robot navigating the warehouse.
- **State**: The robot’s current location.
- **Initial State**: The robot's starting point in the warehouse.
- **Actions**: Possible movements (e.g., move left, right, forward, backward).
- **Transition Model**: Describes the new location after a move.
- **State Space**: All possible locations the robot can reach.
- **Goal Test**: Determines if the robot has reached the delivery spot.
- **Path Cost**: Time or distance required for the robot to reach the goal.

<br><br>
### Search Algorithms
- **Depth-First Search (DFS)**
  - **Approach**: Explores one path deeply before trying another.
  - **Example**: Searching for a lost item in every drawer before moving to another room.
  - **Data Structure**: Stack (Last In, First Out).

- **Breadth-First Search (BFS)**
  - **Approach**: Explores all nearby options before going deeper.
  - **Example**: Checking every desk in a row for lost items before moving to the next row.
  - **Data Structure**: Queue (First In, First Out).

- **Greedy Best-First Search**
  - **Approach**: Chooses the path that seems closest to the goal based on a heuristic.
  - **Example**: A navigation app suggesting routes based on estimated traffic conditions.

- **A* Search**
  - **Approach**: Considers both the cost to reach the current point and the estimated cost to the goal.
  - **Example**: A GPS system calculating the best driving route considering both distance and traffic.

<br><br>
### Adversarial Search
- **Minimax Algorithm**
    - **Purpose**: Used in competitive scenarios like games.
    - **Example**: A chess AI deciding the best move considering both the player's and opponent’s strategies.

- **Alpha-Beta Pruning**
    - **Purpose**: Optimizes Minimax by cutting off branches that won't affect the final decision.
    - **Example**: A chess program skipping moves that are obviously worse than previously evaluated moves.

- **Depth-Limited Minimax**
    - **Approach**: Limits the search to a certain number of moves and uses an evaluation function for further decisions.
    - **Example**: A game AI assessing possible moves up to a certain depth and estimating the best move based on board configuration.

These concepts and examples illustrate how AI systems solve complex problems efficiently and effectively.
