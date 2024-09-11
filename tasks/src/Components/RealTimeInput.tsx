import React, { ChangeEvent, useState } from "react";

const RealTimeInput: React.FC = () => {
  const [fname, setFname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bdate, setBdate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  return (
    <div className="border border-3 border-secondary p-4 position-absolute top-50 start-50 translate-middle w-25">
      <form action="form">
        <h2 className="text-center">Form</h2>
        <div>
          <label htmlFor="fname" className="form-label mt-2">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            className="form-control"
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setFname(e.target.value)
            }
          />
          {fname && (
            <div>
              <p className="mb-0 text-info">First Name: {fname}</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="form-label mt-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setEmail(e.target.value)
            }
          />
          {email && (
            <div>
              <p className="mb-0 text-info">Email: {email}</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="date" className="form-label mt-2">
            Birth-date
          </label>
          <input
            type="date"
            id="date"
            className="form-control"
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setBdate(e.target.value)
            }
          />
          {bdate && (
            <div>
              <p className="mb-0 text-info">Birth-date: {bdate}</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="form-label mt-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            maxLength={10}
            className="form-control"
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setPhone(e.target.value)
            }
          />
          {phone && (
            <div>
              <p className="mb-0 text-info">Phone Number: {phone}</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="gender" className="mt-2">
            Gender
          </label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              className="form-check-input"
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setGender(e.target.checked ? e.target.value : "")
              }
            />
            <label htmlFor="" className="form-check-label mx-1">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              value="Female"
              className="form-check-input"
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setGender(e.target.checked ? e.target.value : "")
              }
            />
            <label htmlFor="" className="form-check-label mx-1">
              Female
            </label>
            {gender && (
              <div>
                <p className="mb-0 text-info">Gender: {gender}</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RealTimeInput;
