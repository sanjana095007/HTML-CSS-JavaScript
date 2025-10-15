function solution(D) {
    // Days in order
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Initialize output dictionary with 0 for all days
    const result = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 0,
        'Thu': 0,
        'Fri': 0,
        'Sat': 0,
        'Sun': 0
    };

    // Step 1: Sum values per day
    for (let dateStr in D) {
        const date = new Date(dateStr);
        const dayIndex = (date.getDay() + 6) % 7; // convert Sunday=0 to Sunday=6
        const day = days[dayIndex];
        result[day] += D[dateStr];
    }

    // Step 2: Handle missing days (set them as mean of prev & next)
    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        if (result[day] === 0) {
            let prevIndex = (i - 1 + 7) % 7;
            let nextIndex = (i + 1) % 7;
            // Find previous non-zero value
            while (result[days[prevIndex]] === 0 && prevIndex !== i) {
                prevIndex = (prevIndex - 1 + 7) % 7;
            }
            // Find next non-zero value
            while (result[days[nextIndex]] === 0 && nextIndex !== i) {
                nextIndex = (nextIndex + 1) % 7;
            }
            const prevVal = result[days[prevIndex]];
            const nextVal = result[days[nextIndex]];
            result[day] = Math.round((prevVal + nextVal) / 2);
        }
    }

    return result;
}
