# Workshop Auto-Formatter for TerminalFour
Learning Support hosts many workshops.

Sometimes these workshops are part of a series and should be grouped together on our website. For example: our Game Development Workshop is a three-part series. Rather than listing each part individually, interspersed with our other CS workshops, it's better to chunk "like with like", so-to-speak.

To facilitate this grouping, I made this React app.

---

## Functionality
This app:
<ol>
  <li>Parses Learning Support Workshop/Event information from a local .CSV file into JavaScript objects.</li>
  <li>Sorts the events by date, discipline, workshop series; omits events that have already occurred.</li>
  <li>Formats date, time, etc. information into a nice, readable format for use on our website.</li>
  <li>Renders our content to HTML, using the "Nested Accordion" functionality and formatting I came up with.</li>
  
</ol>

From here, you can just copy and paste the page source into T4. I use Chrome's page inspector and just copy each element I want, one-by-one, but if requested by staff, I can have it just print the HTML for us directly. 

If your T4 page already contains the code and stylesheets required for the "Nested Accordion" stuff, it shouldn't be too bad.
