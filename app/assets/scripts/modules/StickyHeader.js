import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor(){
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		/* store all the header links */
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();

	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
				
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "down"){
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						/*this.headerLinks.removeClass("is-current-link");*/
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}

				},
				/* default offset is 0 */
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "up"){
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						/*this.headerLinks.removeClass("is-current-link");*/
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}

				},
				/* default offset is 0 */
				offset: "-50%"
			});
		});
	}
}

export default StickyHeader;