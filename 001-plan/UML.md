
```mermaid
---
title: Tic Tac Toe Game
---

classDiagram

    GameController --> Game
    Game *-- Player
    Game *-- Board
    GameController --> MenuView
    GameController --> BoardView

    namespace Controller {
        class GameController {
            -Game myGame
            -MenuView myMenu
            +handleStartGame()
            +handleInsertCell()
            +handleRestartGame()
            +handleShowMainMenu()
            +close()
        }
    }

    namespace Model {
        class Player {
            -int playerNumber
            -string symbol
            +Player(symbol) 
            +getSymbol(): string
        }

        class Board {
            -int width
            -int length
            -string[][] myBoard
            +insertCell(x, y, symbol)
            +getCell(x, y): string
            +win(): bool
            +clear()
        }

        class Game {
            -int activePlayer
            -Player playerOne
            -Player playerTwo
            +Game()
            +getActivePlayer(): int
            +reset()
        }
    }

    namespace View {
        class MenuView {
            +MenuView()
            +render()
            +clear()
            +showBoard()

        }

        class BoardView {
            +BoardView()
            +render()
            +clear()
            +updateCell()
            +showPopupMenu()
            +exit()
        }
    }

```
