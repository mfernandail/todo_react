import '../styles/Filters.css'

function Filters({ onFilterChange, currentFilter }) {
  const onChangeState = (e) => {
    onFilterChange(e.target.id)
  }
  return (
    <div className="filters">
      <button
        id="all"
        onClick={onChangeState}
        className={`filter-btn ${currentFilter === 'all' ? 'active' : ''} `}
      >
        All
      </button>
      <button
        id="active"
        onClick={onChangeState}
        className={`filter-btn ${currentFilter === 'active' ? 'active' : ''} `}
      >
        Active
      </button>
      <button
        id="completed"
        onClick={onChangeState}
        className={`filter-btn ${
          currentFilter === 'completed' ? 'active' : ''
        } `}
      >
        Completed
      </button>
    </div>
  )
}
export default Filters
