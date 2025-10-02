import '../styles/Filters.css'

function Filters({ onFilterChange }) {
  const stateTask = (stateTask) => {
    onFilterChange(stateTask)
  }
  return (
    <div className="filters">
      <button onClick={() => stateTask(null)} className="filter-btn active">
        All
      </button>
      <button onClick={() => stateTask(false)} className="filter-btn">
        Active
      </button>
      <button onClick={() => stateTask(true)} className="filter-btn">
        Completed
      </button>
    </div>
  )
}
export default Filters
