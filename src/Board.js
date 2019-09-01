import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 3,
    ncols: 3,
    chanceLightStartOn: 0.25

  }

  constructor(props) {
    super(props);
    this.createBoard = this.createBoard.bind(this)
    this.flipCellsAround = this.flipCellsAround.bind(this)
    this.tblBoard = this.tblBoard.bind(this)

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
    this.tblBoard = []
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
     
      for (let i = 0; i < this.props.nrows; i++) {
        let rows = []
      
        
        for (let j = 0; j < this.props.ncols; j++) {
          
          rows.push(Math.random() < this.props.chanceLightStartOn)
        }
        board.push(rows)
      }
      console.log(board)
      
    
    // console.log(this.props.chanceLightStartOn)
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    console.log(coord)


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x]
      }
    }
    

    
    // TODO: flip this cell and the cells around it


    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }
  tblBoard() {
    let tableBoard = []
    for(let i = 0; i < this.props.nrow; i++) {
      let rows = []
      for (let j = 0; j < this.props.ncols; j++) {
        
         rows.push(<Cell isLit = {this.state.board[i][j]}/>)
      }
     
      tableBoard.push(<tr>{rows}</tr>)
    }
    return tableBoard
  }


  /** Render game board or winning message. */

  
  render() {
    
    console.log(this.tblBoard)
    
    console.log(this.tblBoard)
    // if the game is won, just show a winning msg & render nothing else

    // TODO
    
    return (
      <table className='Board'>
        <tbody>{this.tblBoard}</tbody>
        {/* {console.log(this.tblBoard.)} */}
      </table>
    )
    // make table board

    // TODO
  }
}


export default Board;
