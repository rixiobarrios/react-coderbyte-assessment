import React, { useState, useEffect } from 'react';

function PhoneBook() {
    const [entries, setEntries] = useState([]);

    const [values, setValues] = useState({
        userFirstName: 'John',
        userLastName: 'Doe',
        userPhone: '0123456789',
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const clearForm = () => {
        setValues({
            userFirstName: '',
            userLastName: '',
            userPhone: '',
        });
    };

    const handleSubmit = () => {
        setEntries(entries.concat(values));
        clearForm();
    };

    return (
        <div className="solution">
            <h1>Phone Book</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <label>First name:</label>
                <br />
                <input
                    value={values.userFirstName || ''}
                    onChange={handleChange}
                    className="userFirstName"
                    name="userFirstName"
                    type="text"
                />
                <br />
                <label>Last name:</label>
                <br />
                <input
                    value={values.userLastName || ''}
                    onChange={handleChange}
                    className="userLastName"
                    name="userLastName"
                    type="text"
                />
                <br />
                <label>Phone:</label>
                <br />
                <input
                    value={values.userPhone || ''}
                    onChange={handleChange}
                    className="userPhone"
                    name="userPhone"
                    type="text"
                />
                <br />
                <input
                    onClick={handleSubmit}
                    className="submitButton"
                    type="submit"
                    value="Submit"
                />
            </form>
            <InformationTable entries={entries} />
        </div>
    );
}

function InformationTable(props) {
    const { entries } = props;
    // eslint-disable-next-line
    const [sortedEntries, setSortedEntries] = useState([]);

    const compare = (a, b) => {
        const comparison =
            a.userLastName.toLowerCase() > b.userLastName.toLowerCase()
                ? 1
                : -1;
        return comparison;
    };

    useEffect(() => {
        setSortedEntries(entries.sort(compare));
    }, [entries]);

    return (
        <table className="informationTable">
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                </tr>
                {entries.map((entry) => {
                    return (
                        <tr key={entry.userPhone}>
                            <td>{entry.userFirstName}</td>
                            <td>{entry.userLastName}</td>
                            <td>{entry.userPhone}</td>
                        </tr>
                    );
                })}
            </thead>
        </table>
    );
}

export default PhoneBook;
