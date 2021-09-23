import './css/App.css';
import TodoList from "./components/TodoList";
import React from "react";
import AddItem from "./components/AddItem";
import Filter from "./components/Filter";
// import TestComponent from "./components/TestComponent";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                name: "javascript learn",
                done: false,
                }
            ],
            filter: "all",
            date: new Date()
        };
    }

    addNote = (note) => {
        if(note !== "") {
            const notesAfterUpdate = this.state.notes.slice();

            notesAfterUpdate.push({
                name: note,
                done: false,
            });

            this.setState({
                notes: notesAfterUpdate,
            })
        }
    }

    deleteNote = (noteIndex) => {
        const notesAfterUpdate = this.state.notes.slice();

        notesAfterUpdate.splice(noteIndex, 1);

        this.setState({
            notes: notesAfterUpdate,
        });
    }

    clearList = () => {
        this.setState({
            notes: [],
        });
    }

    selectedFilter = (filter) => {
        this.setState({
            filter,
        });
    }

    getFilterList = () => {
        if(this.state.filter === "all"){
            return this.state.notes;
        }

        if(this.state.filter === "allCompleted"){
            return this.state.notes.filter(note => note.done === true);
        }

        if(this.state.filter === "allUncompleted"){
            return this.state.notes.filter(note => note.done === false);
        }
    }

    checkNote = (index, name) => {
        const actualNotes = [...this.state.notes];

        if(typeof actualNotes[index] !== "undefined"){
            if(actualNotes[index].name === name){
                actualNotes[index].done = !actualNotes[index].done;
            }
        }

        this.setState({
            notes: actualNotes,
        });
    }

  render() {
    return (
        <div className="App">
          <h2>Notes APP</h2>
            <div className="listContent">
                <div className="taskListName">
                    <h5>Tasks list</h5>
                </div>
              <TodoList
                 notes= {this.getFilterList()}
                 deleteNote= {this.deleteNote}
                 checkNote= {this.checkNote}
              />
            </div>
            <div className="addItem">
              <AddItem
                  notes = {this.state.notes}
                  addNote= {this.addNote}
              />
                <button className="clearBtn" onClick={this.clearList}>Clear list</button>
            </div><br /><br/>
            <div className="filterDisplay">
              <Filter
                  selectedFilter= {this.selectedFilter}
              />
            </div>
            {/*<TestComponent />*/}
        </div>
    );
  }
}

export default App;
