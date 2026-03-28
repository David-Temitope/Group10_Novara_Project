import React from 'react';
import '../tableSection/TableSection.css';

export default function TableComponent() {
return (
<section className="planetary-table-section">
<div className="table-header">
<h2>Planetary Facts at a Glance</h2>
<p>
Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.
</p>
<span className="data-source">
Data about the planets of our solar system (Planetary facts taken from NASA)
</span>
</div>


<div className="table-scroll-container">
<table className="planetary-table">
<thead>
<tr>
{/* Empty headers for the category columns */}
<th className="span-cell"></th>
<th className="span-cell"></th>
<th>Name</th>
<th>Mass (10<sup>24</sup>kg)</th>
<th>Diameter (km)</th>
<th>Density (kg/m<sup>3</sup>)</th>
<th>Gravity (m/s<sup>2</sup>)</th>
</tr>
</thead>
<tbody>
<tr>
<td rowSpan="4" className="category-blue">Terrestrial Planets</td>
<td></td>
<td>Mercury</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>
<tr>
<td></td>
<td>Venus</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>
<tr>
<td></td>
<td>Earth</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>
<tr>
<td></td>
<td>Mars</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>

<tr>
<td rowSpan="4" className="category-blue">Jovian Planets</td>
<td rowSpan="2" className="subcategory-blue">Gas Giants</td>
<td>Jupiter</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>
<tr>
<td>Saturn</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>
<tr>
<td rowSpan="2" className="subcategory-blue">Ice Giants</td>
<td>Uranus</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>
<tr>
<td>Neptune</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>

<tr>
<td colSpan="2" className="category-blue">Dwarf Planets</td>
<td>Pluto</td>
<td>0.330</td>
<td>4,878</td>
<td>5427</td>
<td>3.7</td>
</tr>
</tbody>
</table>
</div>
</section>
);
}