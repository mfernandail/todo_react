import '../styles/Filters.css'

function Filters() {
  return (
    <div className="filters">
      <button className="filter-btn active">All</button>
      <button className="filter-btn">Active</button>
      <button className="filter-btn">Completed</button>
    </div>
  )
}
export default Filters
