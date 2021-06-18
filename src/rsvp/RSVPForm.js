import React from 'react';

export const RSVPForm = () => {
    const onSubmit = () => {};
    return (
        <form onSubmit={onSubmit}>
            <label for="rsvpCode">
                Please enter your 4-digit RSVP code
                <input type="number" name="rsvpCode" id="rsvpCode" />
            </label>
            <button type="submit">submit</button>
        </form>
    )
};

export default RSVPForm;
