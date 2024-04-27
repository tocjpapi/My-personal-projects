import tkinter as tk

from tkinter import messagebox





location_charges ={
    "Epe": 10000,
    "Ibeju-lekki": 10000,
    "Other": 5000,
}


weight_threshold = 10
weight_charge_above_threshold =  5000
weight_charge_below_threshold = 3500


def calculate_delivery_charge():
    location = location_var.get()
    weight = float(weight_entry.get())
    
    #location_charge
    if location in location_charges:
        location_charge = location_charges[location]
    
    else:
        location_charge = location_charges["other"]
    


     # Determine weight charge
    if weight >= weight_threshold:
        weight_charge = weight_charge_above_threshold
        
    
    else:
        weight_charge = weight_charge_below_threshold
        
    
    total_charge = location_charge + weight_charge
    
    messagebox.showinfo("Delivery Charge", f"The delivery charge is: N{total_charge}")
     
#window
root = tk.Tk()
root.title("Simi Services")
root.geometry("500x200")


#Label for location selection
location_label = tk.Label(root, text="Select Location:")
location_label.pack()

# Dropdown for location selection
location_var = tk.StringVar(root)
location_var.set("Other")  # Default location
location_dropdown = tk.OptionMenu(root, location_var, *location_charges.keys())
location_dropdown.pack()

# Label and entry for package weight
weight_label = tk.Label(root, text="Enter Package Weight (kg):")
weight_label.pack()
weight_entry = tk.Entry(root)
weight_entry.pack()

# Button to calculate delivery charge
calculate_button = tk.Button(root, text="Calculate Delivery Charge", command=calculate_delivery_charge)
calculate_button.pack()

# Start GUI main loop
root.mainloop()