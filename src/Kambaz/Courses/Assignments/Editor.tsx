export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />
  
        {/* Description */}
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of
          your Web application running on Netlify.
        </textarea>
        <br />
  
        {/* Points */}
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" type="number" value={100} />
              </td>
            </tr>
  
            {/* Assignment Group */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option value="assignments">Assignments</option>
                  <option value="quizzes">Quizzes</option>
                  <option value="projects">Projects</option>
                </select>
              </td>
            </tr>
  
            {/* Display Grade As */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option value="percentage">Percentage</option>
                  <option value="points">Points</option>
                  <option value="complete/incomplete">Complete/Incomplete</option>
                </select>
              </td>
            </tr>
  
            {/* Submission Type */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option value="online">Online</option>
                  <option value="paper">Paper</option>
                  <option value="external_tool">External Tool</option>
                </select>
              </td>
            </tr>
  
            {/* Online Entry Options */}
            <tr>
              <td align="right" valign="top">Online Entry Options</td>
              <td>
                <input type="checkbox" id="wd-text-entry" /> Text Entry<br />
                <input type="checkbox" id="wd-website-url" /> Website URL<br />
                <input type="checkbox" id="wd-media-recordings" /> Media Recordings<br />
                <input type="checkbox" id="wd-student-annotation" /> Student Annotation<br />
                <input type="checkbox" id="wd-file-upload" /> File Upload<br />
              </td>
            </tr>
  
            {/* Assign To */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
              </td>
              <td>
                <input id="wd-assign-to" value="Everyone" />
              </td>
            </tr>
  
            {/* Due Date */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due Date</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" value="2024-05-13" />
              </td>
            </tr>
  
            {/* Available From */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" value="2024-05-06" />
              </td>
            </tr>
  
            {/* Available Until */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-until">Available until</label>
              </td>
              <td>
                <input id="wd-available-until" type="date" value="2024-05-20" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  