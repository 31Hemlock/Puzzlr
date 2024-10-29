/**
 * Represents the menu that can be opened to reveal controls to the user.
 * @class
 */
export class ControlMenu {
    /**
     * @constructor
     */
    constructor() {
        this.openControlsButton = document.getElementById('openControls')
        this.closeControlsButton = document.getElementById('closeControls')
        this.controls = document.getElementById('controls')
        this.appearanceState = true
        this.openControlsButton.addEventListener('click', () => {
            this.openControls()
        })
        this.closeControlsButton.addEventListener('click', () => {
            this.closeControls()
        })

        // this.init()
    }

    /**
     * Toggles the menu's visibility.
     * 
     * @method
     * @return {void}
     */
    toggle() {
        if (this.appearanceState == false) {
            this.open()
            this.appearanceState = true
        } else {
            this.close()
            this.appearanceState = false
        }
    }
    /**
     * Opens the controls menu.
     * 
     * @method
     * @return {void}
     */
    openControls() {
        this.appearanceState = true;
        this.open();
    }
    /**
     * Closes the controls menu.
     * 
     * @method
     * @return {void}
     */
    closeControls() {
        this.appearanceState = false;
        this.close();
    }

    /**
     * Initializes the controls menu.
     * 
     * @method
     * @return {void}
     */
    init() {
        // this.modal.classList.add('open')
    }

    /**
     * Makes the controls menu visible.
     * 
     * @method
     * @return {void}
     */
    open() {
        this.appearanceState = true
        this.controls.classList.add('controls-open');
    }

    /**
     * Makes the controls menu shrink out of view.
     * 
     * @method
     * @return {void}
     */
    close() {
        this.appearanceState = false
        this.controls.classList.remove('controls-open');
    }

    /**
     * Disables the view of the controls menu for the duration of runtime.
     * Currently used if the user is on mobile.
     * 
     * @method
     * @return {void}
     */
    hideForever() {
        this.appearanceState = false
        this.controls.classList.add('shadowrealm')
    }

    /**
     * Returns the current appearance state of the controls menu.
     * 
     * @method
     * @return {boolean}
     */
    appearance() {
        return this.appearanceState
    }
}
