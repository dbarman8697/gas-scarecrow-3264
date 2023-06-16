import SimpleSlider from "../Components/HomePage/SlickCarousel";

import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <SimpleSlider />
      <br />
      <div>
        <h1
          style={{
            fontSize: "42px",
            letterSpacing: "1px",
            fontFamily: "fantasy",
            marginTop: "90px",
            color: "#383838",
            textAlign: "left",
            marginLeft: "20vh",
          }}
        >
          Transforming lives through volunteers
        </h1>
      </div>
      <div
        style={{
          width: "130vh",
          textAlign: "left",
          marginLeft: "20vh",
          marginTop: "40px",
        }}
      >
        <p>
          The VolunteerNow® mission is to transform lives through volunteers.
          Volunteers change everything - where they live, work, and play - and
          transform their own lives in the process of serving others. Whether
          it's connecting nonprofits to the free workforce that they need,
          supporting teachers and students in the classroom, or providing
          volunteer infrastructure for municipalities, VolunteerNow programs and
          services build capacity for our communities to address critical needs.
        </p>
        <br />
        <p>
          As a national thought leader in volunteerism, and one of the largest
          volunteer centers in the country, VolunteerNow serves as the hub of
          volunteerism in North Texas. We are a national provider of volunteer
          recruitment and management software, leveraging our four decades of
          expertise in volunteer engagement.
        </p>
      </div>
      <div>
        <h1
          style={{
            fontSize: "42px",
            letterSpacing: "1px",
            fontFamily: "fantasy",
            marginTop: "70px",
            color: "#383838",
            textAlign: "center",
            marginBottom: "90px",
          }}
        >
          Supporting all causes
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "50px",
        }}
      >
        <div>
          <img
            width={"350px"}
            style={{ height: "350px" }}
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/3d66fa19-1962-4fee-b756-76695db700c6/Volunteernow-voly-mission-schools.jpg?format=500w"
          />
          <div
            style={{
              textAlign: "left",
              fontWeight: "500",
              color: "#F03124",
              fontSize: "18px",
              marginTop: "35px",
            }}
          >
            <h1>MISSION-DRIVEN TECHNOLOGY:</h1>
            <h1>VOLY.ORG FOR SCHOOLS</h1>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "340px",
              marginTop: "20px",
            }}
          >
            <p>
              VolunteerNow’s innovative community engagement platform, VOLY.org,
              currently supports dozens of districts - and counting! More than
              118,000 volunteers gave 536,000 hours in the 2018-2019 academic
              year, valued at $13 million. More than 400,000 students were
              directly impacted by parent help, corporate projects, individual
              mentoring, and a multitude of other ways in which school districts
              rely on their surrounding communities.
            </p>
          </div>
        </div>

        <div>
          <img
            width={"350px"}
            style={{ height: "350px" }}
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/7a5ad424-0455-4548-8807-0c0570cb70a6/VOLY-volunteernow-Canine-Companions-Independence.jpg?format=750w"
          />
          <div
            style={{
              textAlign: "left",
              fontWeight: "500",
              color: "#F03124",
              fontSize: "18px",
              marginTop: "35px",
              marginBottom: "46px",
            }}
          >
            <h1>RAISING INDEPENDENCE</h1>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "340px",
              marginTop: "20px",
            }}
          >
            <p>
              Canine Companions for Independence dogs have learned more than 40
              commands and become experts at opening doors, turning lights on
              and off, and even tugging laundry baskets for their owners.
              Children, adults and veterans with disabilities receive assistance
              from trained canines free of charge from the nonprofit, which
              recruits “puppy raisers” - volunteers who teach dogs basic
              obedience and socialization skills. “Recruiting quality volunteers
              is vital to the Canine Companions mission,” Mikell Bollinger,
              Canine for Companions Independence Development Director. “VOLY.org
              makes it possible.”
            </p>
          </div>
        </div>

        <div>
          <img
            width={"350px"}
            style={{ height: "350px" }}
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/3c151f55-5ed0-47ec-9d75-d179ff24d23b/VOLY-volunteernow-magdalen-house-empowering-women.jpg?format=750w"
          />
          <div
            style={{
              textAlign: "left",
              fontWeight: "500",
              color: "#F03124",
              fontSize: "18px",
              marginTop: "35px",
            }}
          >
            <h1>EMPOWERING WOMEN TO FIND HOPE</h1>
            <h1>HOPE</h1>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "340px",
              marginTop: "20px",
            }}
          >
            <p>
              With more than 13,000 volunteer hours given in one year, The
              Magdalen House was able to fulfill its critical mission of
              empowering 230 women to find hope in sobriety. The organization
              provides alcohol-dependent women with 52 solution-focused
              meetings; connections to safe, transitional housing; and access to
              the Peer Recovery Program free of charge. “Volunteers save the
              agency over $106,000 annually,” said Lauren McElroy, Magdalen
              House Development Manager. “Without our volunteers serving as
              overnight supervisors, yoga instructors and meeting chairs, we
              would have to hire those individuals as staff members.”
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1
          style={{
            fontSize: "42px",
            letterSpacing: "1px",
            fontFamily: "fantasy",
            marginTop: "40px",
            color: "#383838",
            textAlign: "left",
            marginLeft: "20vh",
          }}
        >
          VOLY.org, powered by VolunteerNow
        </h1>
      </div>

      <div
        style={{
          width: "130vh",
          textAlign: "left",
          marginLeft: "20vh",
          marginTop: "40px",
        }}
      >
        <p>
          VolunteerNow is a national provider of volunteer recruitment and
          management software through our proprietary technology, VOLY.org. The
          easy-to-use system pairs VolunteerNow's volunteer engagement expertise
          with state-of-the-art technology that engages, tracks, and manages
          volunteers in service to their communities. VOLY.org has expanded as a
          software-as-a-service across the United States for the growth of
          volunteerism and mobilization of volunteer efforts in school
          districts, banks, companies, court systems, and governments and
          municipalities, as well as the continued support of nonprofits and
          volunteer centers.
        </p>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ padding: "50px 10px 0px 140px" }}
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/002ff761-8175-4b47-94b3-6e06993cbf3f/2019-VolunteerNow-Annual-Impact.jpg?format=500w"
            />
          </div>
          <div>
            <h1
              style={{
                fontSize: "42px",
                letterSpacing: "1px",
                fontFamily: "fantasy",
                marginTop: "40px",
                color: "#383838",
                textAlign: "left",
                marginLeft: "20vh",
              }}
            >
              Our annual impact
            </h1>
          </div>
        </div>
        <div
          style={{
            textAlign: "left",
            marginLeft: "110vh",
            width: "500px",
            marginTop: "-330px",
            marginBottom: "170px",
          }}
        >
          <li>
            In a typical year, VolunteerNow mobilizes over 300,000 volunteers
            who give 1.6 million hours valued at $46 million.
          </li>
          <br />
          <li>
            We serve 3,500 nonprofits and refer more than 700 volunteers per
            day.
          </li>
          <br />
          <li>
            For every dollar of support we receive, we mobilize $10 of volunteer
            labor for our community.
          </li>
        </div>
      </div>

      <div>
        <h1
          style={{
            fontSize: "42px",
            letterSpacing: "1px",
            fontFamily: "fantasy",
            marginTop: "70px",
            color: "#383838",
            textAlign: "center",
          }}
        >
          Our partners
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "0px 50px 0x 50px",
        }}
      >
        <div>
          <img
            width={"400px"}
            style={{ height: "350px" }}
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/506b076a-c4b2-4ee1-8439-41b5366b87ee/VOAD-voluntary-organiztion-active-disaster-texas-volunteernow-voly-75204.jpg?format=750w"
          />
        </div>

        <div>
          <img
            width={"400px"}
            style={{ height: "350px" }}
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/0d33177a-87b0-4d30-aa3b-2d45dace53fb/MCTF-mass-care-task-force-volunteernow-voly-texas-75204.jpg?format=500w"
          />
        </div>

        <div>
          <img
            width={"400px"}
            style={{ height: "350px" }}
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/0e16569d-c37d-4c5c-80a6-eecc669b52dd/TVMC-texas-management-volunteer-conference-volunteernow-voly.jpg?format=500w"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "50px",
        }}
      >
        <div>
          <div
            style={{
              textAlign: "left",
              fontWeight: "500",
              color: "#F03124",
              fontSize: "18px",
              marginTop: "35px",
            }}
          >
            <h1>VOLUNTARY ORGANIZATIONS ACTIVE</h1>
            <h1>IN DISASTER (VOAD)</h1>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "340px",
              marginTop: "20px",
            }}
          >
            <p>
              The Dallas County VOAD coordinates planning and preparedness
              efforts in advance of a disaster. VolunteerNow is an independent
              member that collaboratively works to provide relief and recovery
              services in the event of a disaster
            </p>
          </div>
        </div>

        <div>
          <div
            style={{
              textAlign: "left",
              fontWeight: "500",
              color: "#F03124",
              fontSize: "18px",
              marginTop: "35px",
              marginBottom: "46px",
            }}
          >
            <h1>MASS CARE TASK FORCE</h1>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "340px",
              marginTop: "20px",
            }}
          >
            <p>
              A collaboration between the American Red Cross North Texas Region,
              the Salvation Army DFW Metroplex Command, the North Texas Food
              Bank, and VolunteerNow.
            </p>
          </div>
        </div>

        <div>
          <div
            style={{
              textAlign: "left",
              fontWeight: "500",
              color: "#F03124",
              fontSize: "18px",
              marginTop: "35px",
            }}
          >
            <h1>TEXAS VOLUNTEER MANAGEMENT </h1>
            <h1>CONFERENCE</h1>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "340px",
              marginTop: "20px",
            }}
          >
            <p>
              The Texas Volunteer Management Conference provides a day of broad
              based, affordable, nearby training for professional volunteer
              managers in Texas and nearby states.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
