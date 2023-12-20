import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import {
	isRegexpStringMatch,
	useCollapsible,
	Collapsible,
} from "@docusaurus/theme-common";
import {
	isSamePath,
	useLocalPathname,
} from "@docusaurus/theme-common/internal";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import NavbarItem from "@theme/NavbarItem";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { useLocation } from "@docusaurus/router";
function isItemActive(item, localPathname) {
	if (isSamePath(item.to, localPathname)) {
		return true;
	}
	if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
		return true;
	}
	if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
		return true;
	}
	return false;
}
function containsActiveItems(items, localPathname) {
	return items.some((item) => isItemActive(item, localPathname));
}
function DropdownNavbarItemDesktop({
	items,
	position,
	className,
	onClick,
	...props
}) {
	const dropdownRef = useRef(null);
	const [showDropdown, setShowDropdown] = useState(false);
	const [currentDocTitle, setCurrentDocTitle] = useState('');
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
				return;
			}
			setShowDropdown(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);
		document.addEventListener("focusin", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
			document.removeEventListener("focusin", handleClickOutside);
		};
	}, [dropdownRef]);
	// // console.log(items);
	const location = useLocation();
	useEffect(() => {
		function getDocTitle(listOfItems, index) {
			// // console.log(listOfItems, index);
			if (listOfItems.length === index) {
				return null;
			}

			if (listOfItems[index]?.dropdown) {
				return getDocTitle(listOfItems[index]?.dropdown, 0)
			} else if (listOfItems[index]?.to === location.pathname) {
				return listOfItems[index]?.label
			} else {
				index++;
				return getDocTitle(listOfItems, index)
			}
		}

		setCurrentDocTitle(getDocTitle(items, 0))
		// console.log(getDocTitle(items, 0), 'hello', null)
	}, [
		location.pathname
	])
	return (
		<div
			ref={dropdownRef}
			className={clsx("navbar__item", "dropdown", "dropdown--hoverable", {
				"dropdown--right": position === "right",
				"dropdown--show": showDropdown,
			})}
		>
			<NavbarNavLink
				aria-haspopup="true"
				aria-expanded={showDropdown}
				role="button"
				href={props.to ? undefined : "#"}
				className={clsx("navbar__link", className)}
				{...props}
				label={currentDocTitle || props?.label} // Add you Dynamic Path
				onClick={props.to ? undefined : (e) => e.preventDefault()}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						setShowDropdown(!showDropdown);
					}
				}}
			>

				{/* {props.children ?? props.label} */}
			</NavbarNavLink>
			{/* <ul className="dropdown__menu">
			{items.map((childItemProps, i) => (
				<NavbarItem
					isDropdownItem
					activeClassName="dropdown__link--active"
					{...childItemProps}
					key={i}
				/>
			))}
		</ul> */}
			<DropdownItems items={items} />
		</div>
	);
}
function DropdownNavbarItemMobile({
	items,
	className,
	position, // Need to destructure position from props so that it doesn't get passed on.
	onClick,
	...props
}) {
	const localPathname = useLocalPathname();
	// console.log(localPathname, 'localpathname');

	const containsActive = containsActiveItems(items, localPathname);
	const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
		initialState: () => !containsActive,
	});
	// Expand/collapse if any item active after a navigation
	useEffect(() => {
		if (containsActive) {
			setCollapsed(!containsActive);
		}
	}, [localPathname, containsActive, setCollapsed]);
	// console.log(onClick.toString());
	// console.log(items, 'items');
	return (
		<li
			className={clsx("menu__list-item", {
				"menu__list-item--collapsed": collapsed,
			})}
		>
			<NavbarNavLink
				role="button"
				className={clsx(
					styles.dropdownNavbarItemMobile,
					"menu__link menu__link--sublist menu__link--sublist-caret",
					className
				)}
				{...props}
				onClick={(e) => {
					e.preventDefault();
					toggleCollapsed();
				}}
			>
				{props.children ?? props.label}
			</NavbarNavLink>
			<Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
				{items.map((childItemProps, i) => (
					childItemProps.hasOwnProperty('dropdown') ? (<DropdownItemsMobile items={childItemProps.dropdown} key={i} onClick={onClick} {...props} />) :
						<NavbarItem
							mobile
							isDropdownItem
							onClick={onClick}
							activeClassName="menu__link--active"
							{...childItemProps}
							key={i}
						/>
				))}
			</Collapsible>
			{/* <DropdownItemsMobile items={items} / > */}
		</li>
	);
}

function DropdownItemsMobile({ items, onClick, className, ...props }) {
	// console.log("Wow it's render", items);
	const location = useLocation()
	function getDocTitle(listOfItems, index) {
		// // console.log(listOfItems, index);
		if (listOfItems.length === index) {
			return false;
		}

		if (listOfItems[index]?.dropdown) {
			return getDocTitle(listOfItems[index]?.dropdown, 0)
		} else if (listOfItems[index]?.to === location.pathname) {
			return true
		} else {
			index++;
			return getDocTitle(listOfItems, index)
		}
	}
	const containsActive = getDocTitle(items, 0)
	// console.log(containsActive, 'containsActive');
	const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
		initialState: () => !containsActive,
	});
	// return items.map(item => item.label)
	return <li className={clsx("menu__list-item", {
		"menu__list-item--collapsed": collapsed,
	})}>
		<NavbarNavLink
			role="button"
			className={clsx(
				styles.dropdownNavbarItemMobile,
				"menu__link menu__link--sublist menu__link--sublist-caret",
				className
			)}
			{...props}
			onClick={(e) => {
				e.preventDefault();
				toggleCollapsed();
			}}
		>
			{props.children ?? props.label}
		</NavbarNavLink>
		<Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
			{items.map((childItemProps, i) =>
			(
				<NavbarItem
					mobile
					isDropdownItem
					onClick={onClick}
					activeClassName="menu__link--active"
					{...childItemProps}
					key={i}
				/>
			)
			)}
		</Collapsible>
	</li>
}

function DropdownItems({ items }) {
	return (
		<ul className="dropdown__menu">
			{items.map((childItemProps, i) => {
				const [dropdownStatus, setDropdownStatus] = useState(false);

				return childItemProps.hasOwnProperty("dropdown") ? (
					<li>
						<div
							onClick={() => setDropdownStatus(!dropdownStatus)}
							className="has-dropdown"
						>
							<Link className="dropdown__link">{childItemProps.label}</Link>

							{dropdownStatus ? (
								<IoMdArrowDropdown className="arrow" />
							) : (
								<IoMdArrowDropright className="arrow" style={{ rotate: '180' }} />
							)}
						</div>

						<ul className={`${dropdownStatus && "active-nested-dropdown"}`}>
							{childItemProps.dropdown.map((data) => {
								return (
									<li>
										<Link
											to={data?.to}
											className="dropdown__menu_nested_items dropdown__link"
										>
											{data.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</li>
				) : (
					<NavbarItem
						isDropdownItem
						activeClassName="dropdown__link--active"
						{...childItemProps}
						key={i}
					/>
				);
			})}
		</ul>
	);
}

export default function DropdownNavbarItem({ mobile = false, ...props }) {
	// console.log(props, mobile, "props");
	const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop;
	return <Comp {...props} />;
}
