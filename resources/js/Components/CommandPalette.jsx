import React, { Fragment, useState } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FolderIcon } from '@heroicons/react/24/outline';

const projects = [
    { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
    // More projects...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const CommandPalette = ({ open, setOpen }) => {
    const [query, setQuery] = useState('');

    const filteredProjects =
        query === ''
            ? []
            : projects.filter((project) => {
                return project.name.toLowerCase().includes(query.toLowerCase())
            });

    return (
        <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
            <Dialog as="div" className="fixed inset-0 z-50 flex items-start justify-center" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 p-4 sm:p-6 md:p-20 flex items-center justify-center pt-[20vh]">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="mx-auto max-w-lg w-full transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-white shadow-2xl transition-all">
                            <Combobox onChange={(item) => (window.location = item.url)}>
                                <div className="relative">
                                    <MagnifyingGlassIcon
                                        className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <Combobox.Input
                                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 focus:ring-0 sm:text-sm focus:outline-none"
                                        placeholder="Search..."
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                </div>

                                {(query === '' || filteredProjects.length > 0) && (
                                    <Combobox.Options
                                        static
                                        className="max-h-60 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto"
                                    >
                                        {filteredProjects.length > 0 && (
                                            <ul className="p-2 text-sm text-gray-700">
                                                {filteredProjects.map((project) => (
                                                    <Combobox.Option
                                                        key={project.id}
                                                        value={project}
                                                        className={({ active }) =>
                                                            classNames(
                                                                'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                                                active && 'bg-gray-100 text-gray-900'
                                                            )
                                                        }
                                                    >
                                                        {({ active }) => (
                                                            <>
                                                                <FolderIcon
                                                                    className={classNames('h-6 w-6 flex-none', active ? 'text-gray-700' : 'text-gray-400')}
                                                                    aria-hidden="true"
                                                                />
                                                                <span className="ml-3 flex-auto truncate">{project.name}</span>
                                                            </>
                                                        )}
                                                    </Combobox.Option>
                                                ))}
                                            </ul>
                                        )}
                                    </Combobox.Options>
                                )}

                                {query !== '' && filteredProjects.length === 0 && (
                                    <div className="px-6 py-14 text-center sm:px-14">
                                        <FolderIcon className="mx-auto h-6 w-6 text-gray-500" aria-hidden="true" />
                                        <p className="mt-4 text-sm text-gray-500">
                                            We couldn't find any projects with that term. Please try again.
                                        </p>
                                    </div>
                                )}
                            </Combobox>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default CommandPalette;
