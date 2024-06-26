import { Injectable, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

type Notification = {
  message?: string | undefined;
  duration?: number | undefined;
  closeMessage?: string | undefined;
  panelClass?: 'error-snackbar' | 'warn-snackbar' | 'success-snackbar';
};

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  // Function to open a snackbar with a message and a duration of 2 seconds or a custom duration and a custom close message
  openSnackBar(optionsNotification: Notification) {
    const { message, duration, closeMessage, panelClass } = optionsNotification;

    this._snackBar.open(message ?? '', closeMessage ?? '', {
      duration: duration ?? 2000,
      panelClass: [panelClass ?? ''],
    });
  }
}
