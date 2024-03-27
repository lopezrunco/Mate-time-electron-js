work_alert() {
    zenity --info --title="Work time" --text="Time to code!" --no-markup --width=250 --timeout=0
}

mate_alert() {
    zenity --info --title="Mate time" --text="Take a rest!" --no-markup --width=250 --timeout=0
}

# Main loop
while true; do
    # Display alert every 25 minutes
    work_alert
    sleep $((25 * 60))

    # Display alert every 5 minutes
    mate_alert
    sleep $((5 * 60))
done
